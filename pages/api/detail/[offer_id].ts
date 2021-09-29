// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fetchFeedSearch from "../../../lib/fetchFeedSearch";

interface TypeNextApiRequest extends NextApiRequest {
  query: {
    offer_id: string;
  };
}

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

interface TypeRes {
  result: TypeFeed[];
}

export default async function handler(
  req: TypeNextApiRequest,
  res: NextApiResponse<TypeRes>
) {
  const { offer_id } = req.query;

  const temp: TypeFeed[] = await fetchFeedSearch(
    `${process.env.FEED_INDEX}`,
    offer_id
  );
  res.status(200).json({ result: temp });
}
