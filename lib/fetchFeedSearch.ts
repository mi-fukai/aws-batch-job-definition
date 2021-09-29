interface TypeFeed {
  referencenumber: string;
  date: string;
  url: string;
  title: string;
  description: string;
  state: string;
  city: string;
  country: string;
  station: string;
  company: string;
  jobtype: string;
  salary: string;
  category: string;
  imageUrls: string;
  timeshift: string;
  subwayaccess: string;
}

export const fetchFeedSearch = async (
  index: string,
  offer_id: string
): Promise<TypeFeed[]> => {
  const search_result = await (
    await fetch(`${process.env.ES_HOST}/${index}/_search`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          multi_match: {
            query: offer_id,
            fields: ["referencenumber"],
          },
        },
      }),
    })
  ).json();
  return search_result.hits.hits.length
    ? search_result.hits.hits.map((hit) => {
        return {
          referencenumber: hit._source.referencenumber,
          date: hit._source.date,
          url: hit._source.url,
          title: hit._source.title,
          description: hit._source.description,
          state: hit._source.state,
          city: hit._source.city,
          country: hit._source.country,
          station: hit._source.station,
          company: hit._source.company,
          jobtype: hit._source.jobtype,
          salary: hit._source.salary,
          category: hit._source.category,
          imageUrls: hit._source.imageUrls,
          timeshift: hit._source.timeshift,
          subwayaccess: hit._source.subwayaccess,
        };
      })
    : [];
};

export default fetchFeedSearch;
