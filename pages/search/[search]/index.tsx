import React from "react";

import styles from "@/styles/pages/search/Home.module.css";
import { SearchContents } from "@/components/00_templates/SearchContents";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "node:querystring";
import SingleColumn from "@/components/layout/SingleColumn";

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
    <main className={styles.main}>
      <SingleColumn>
        <SearchContents
          offers={offers}
          total={total}
          pager={pager}
          defaultSearchText={defaultSearchText}
        />
      </SingleColumn>
    </main>
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
  async ({ params, query }: GetServerSidePropsContext<TypeParams>) => {
    const { p } = query as TypeQuery;
    const pager: number = p ? parseInt(p) : 1;
    const URL = `${process.env.NEXT_PUBLIC_HOST}/api/search/${encodeURI(
      params.search
    )}?p=${pager}`;
    const resultFetch: TypeOffers = await (await fetch(URL)).json();
    return {
      props: {
        offers: resultFetch.result,
        total: resultFetch.total,
        defaultSearchText: params.search,
        pager,
      },
    };
  };
