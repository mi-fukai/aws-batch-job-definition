import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import styles from "@/styles/Detail.module.css";
import fetchAllFeed from "../../lib/fetchAllFeed";
import fetchFeedSearch from "../../lib/fetchFeedSearch";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import { ParsedUrlQuery } from "node:querystring";
import { OffersInformation } from "@/components/00_templates/OffersInformation";
import { OfferInformationMainTab } from "@/components/10_organisms/OfferInformationMainTab";
import { OfferInformationCompanyTab } from "@/components/10_organisms/OfferInformationCompanyTab";

interface Props {
  offerInformation: {
    imageUrls: string;
    title: string;
    station: string;
    jobtype: string;
    state: string;
    timeshift: string;
    salary: string;
    description: string;
    company: string;
  };
}

export const OfferId: React.VFC<Props> = ({ offerInformation }: Props) => {

  return (
    <main className={styles.main}>
      <OffersInformation>
        {[
          {
            label: "求人情報",
            node: (
              <OfferInformationMainTab offerInformation={offerInformation} />
            ),
          },
          {
            label: "会社情報",
            node: (
              <OfferInformationCompanyTab offerInformation={offerInformation} />
            ),
          },
          {
            label: "その他",
            node: <p>sonota</p>,
          },
        ]}
      </OffersInformation>
    </main>
  );
};

interface TypePathParams extends ParsedUrlQuery {
  offer_id: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}: GetServerSidePropsContext<TypePathParams>) => {
  const URL = `${process.env.NEXT_PUBLIC_HOST}/api/detail/${params.offer_id}`;
  const offerInformation = (await (await fetch(URL)).json()).result[0];
  return { props: { offerInformation } };
};

// export const getStaticProps: GetStaticProps<Props> = async ({
//   params,
// }: GetStaticPropsContext<TypePathParams>) => {
//   // return { notFound: true }
//   const offerInformation = (await fetchFeedSearch("baito", params.offer_id))[0];
//   return { props: { offerInformation } };
// };

// interface TypeOfferIds {
//   _source: {
//     referencenumber: string;
//   };
// }

// export const getStaticPaths: GetStaticPaths<TypePathParams> = async () => {
//   const offerIds: TypeOfferIds[] = await fetchAllFeed("baito");
//   return {
//     paths: offerIds.map((item) => {
//       return { params: { offer_id: item._source.referencenumber } };
//     }),
//     fallback: false,
//   };
// };

export default OfferId;
