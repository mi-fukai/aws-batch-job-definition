interface TypeOfferIds {
  _source: {
    referencenumber: string;
  };
}

interface TypeFeeds {
  hits: {
    hits: TypeOfferIds[]
  }
}

export const fetchAllFeed = async (index): Promise<TypeOfferIds[]> => {
  const fetchFeed = async (id: string): Promise<TypeFeeds> =>
    await (
      await fetch(`${process.env.ES_HOST}/_search/scroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          scroll: "1m",
          scroll_id: id,
        }),
      })
    ).json();

  const deleteScrollId = (id: string): void => {
    fetch(`${process.env.ES_HOST}/_search/scroll`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        scroll_id: id,
      }),
    });
  };
  const baseResponse = await (
    await fetch(
      `${process.env.ES_HOST}/${index}/_search/?_source=referencenumber&scroll=1m&size=10000`
    )
  ).json();
  const scrollId: string = baseResponse._scroll_id;
  const maxLength: number = baseResponse.hits.total.value;
  let hits: TypeOfferIds[] = baseResponse.hits.hits;
  console.log("\nmaxLength: " + maxLength);
  while (maxLength !== hits.length) {
    hits = [...hits, ...(await fetchFeed(scrollId)).hits.hits];
  }
  deleteScrollId(scrollId);
  return hits;
};

export default fetchAllFeed;
