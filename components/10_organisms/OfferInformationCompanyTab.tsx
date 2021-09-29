import React from "react";

import styles from "@/styles/10_organisms/OfferInformationCompanyTab.module.css"

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

export const OfferInformationCompanyTab: React.VFC<TypeProps> = ({ offerInformation }: TypeProps) => {
  return (
    <div className={styles.tabPanelContent}>
    <div className={styles.contents}>
      <div className={styles.content}>
        <div className={styles.contentOneLine}>
          <p className={styles.contentLabel}>会社情報</p>
          <p className={styles.contentText}>
            {offerInformation.company}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};
