// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface TypeNextApiRequest extends NextApiRequest {
  query: {
    p: string | null;
    search: string;
    all?: string;
  };
}

interface TypeRes {
  total: number;
  result: TypeOffer;
}

export default async function handler(
  req: TypeNextApiRequest,
  res: NextApiResponse<TypeRes>
) {
  const fetchSize = 10;
  const { search } = (req.query.all === "true") ? { search: "" } : req.query;
  const page = req.query ? parseInt(req.query.p) - 1 : 0;

  console.log(`searching: ${search}, Page: ${page}`);

  const search_query_body = {
    sort: [
      {
        _score: {
          order: "desc",
        },
      },
      {
        date: {
          order: "desc",
        },
      },
    ],
    size: fetchSize,
    from: fetchSize * page,
    track_total_hits: true,
    query: {
      multi_match: {
        query: search,
        operator: "and",
        fields: ["*"],
      },
    },
  };

  const search_result = await (
    await fetch(`${process.env.ES_HOST}/${process.env.FEED_INDEX}/_search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(search_query_body),
    })
  ).json();
  const temp = search_result.hits.hits.length
    ? search_result.hits.hits.map((hit) => {
        return {
          id: hit._id,
          title: hit._source.title,
          url: hit._source.url,
          offerId: hit._source.referencenumber,
          salary: hit._source.salary,
        };
      })
    : [];
  res.status(200).json({ result: temp, total: search_result.hits.total.value });
}
