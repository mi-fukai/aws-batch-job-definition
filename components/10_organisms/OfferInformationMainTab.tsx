import React from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import styles from "@/styles/10_organisms/OfferInformationMainTab.module.css";
import { OfferInformationContentRow } from "@/components/20_molecules/OfferInformationContentRow";
import { SliderImages } from "../20_molecules/SliderImages";

interface TypeProps {
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

export const OfferInformationMainTab: React.VFC<TypeProps> = ({
  offerInformation,
}: TypeProps) => {
  const images: string[] | null = offerInformation.imageUrls
    ? offerInformation.imageUrls.split(",")
    : null;
  return (
    <div className={styles.tabPanelContent}>
      <Typography variant="h5" component="h2">
        {offerInformation.title}
      </Typography>
      {images[0] && <SliderImages>{images}</SliderImages>}
      <div className={styles.contents}>
        <OfferInformationContentRow>
          {[{ label: "アクセス", value: offerInformation.station }]}
        </OfferInformationContentRow>
        <OfferInformationContentRow>
          {[
            { label: "雇用形態", value: offerInformation.jobtype },
            { label: "シフト", value: offerInformation.timeshift },
          ]}
        </OfferInformationContentRow>
        <OfferInformationContentRow>
          {[
            { label: "勤務地", value: offerInformation.state },
            { label: "給与", value: offerInformation.salary },
          ]}
        </OfferInformationContentRow>
      </div>
      <div className={styles.description}>
        <div>
          <p>仕事内容</p>
        </div>
        <div>{offerInformation.description}</div>
      </div>
    </div>
  );
};
