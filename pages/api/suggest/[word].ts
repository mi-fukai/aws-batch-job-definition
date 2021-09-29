import type { NextApiRequest, NextApiResponse } from 'next'

interface TypeRes {
  result: {
    id: number,
    text: string,
  }[]
}

export default async function fetchSuggest(
  req: NextApiRequest,
  res: NextApiResponse<TypeRes>
) {
  const { word } = req.query;
  // デフォルトだと30件取得
  const search_result = await (
    await fetch(`${process.env.ES_HOST}/${process.env.AUTOCOMPLETE_SEARCH_WORD_INDEX}/_search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        size: 1000,
        track_total_hits: 100,
        query: {
          multi_match: {
            query: word,
            operator: "and",
            fields: ["text"],
          },
        },
      }),
    })
  ).json();
  const temp = search_result.hits.hits.length
    ? search_result.hits.hits.map((hit) => {
        return {
          id: hit._id,
          text: hit._source.text,
        };
      })
    : [];
  res.status(200).json({ result: temp });
}
