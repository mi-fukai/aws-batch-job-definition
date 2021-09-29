import React from "react";

import Search from "@/pages/search/[search]/index";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";

interface Props {
  offers: TypeOffer[];
  total: number;
  defaultSearchText: string;
  pager: number;
}

export default function Home({
  offers,
  total,
  defaultSearchText,
  pager,
}: Props) {
  return (
    <Search
      offers={offers}
      total={total}
      defaultSearchText={defaultSearchText}
      pager={pager}
    ></Search>
  );
}

interface TypeQuery extends ParsedUrlQuery {
  p: string;
}

interface TypeParams extends ParsedUrlQuery {
  search: string;
}

interface TypeOffers {
  total: number;
  result: TypeOffer[];
}

export const getServerSideProps: GetServerSideProps<Props, TypeParams> =
  async ({ query }: GetServerSidePropsContext<TypeParams>) => {
    const { p } = query as TypeQuery;
    const pager: number = p ? parseInt(p) : 1;
    const URL = `${process.env.NEXT_PUBLIC_HOST}/api/search/all?all=true&p=${pager}`;
    const resultFetch: TypeOffers = await (await fetch(URL)).json();
    return {
      props: {
        offers: resultFetch.result,
        total: resultFetch.total,
        defaultSearchText: "",
        pager,
      },
    };
  };
