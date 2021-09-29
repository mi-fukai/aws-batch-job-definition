import React from "react";
import Link from "next/link";

import styles from "@/styles/20_molecules/TitleContent.module.css";

export const TitleContent: React.VFC = () => {
  return (
    <div className={styles.content}>
      <Link href="/">
        <a>
          <h1 className={styles.title}>Elasticてすと</h1>
        </a>
      </Link>
      <p>
        きーわーどを入力して検索すると、Feedの全要素から一致する文字列があるか検索します
      </p>
    </div>
  );
};

export default TitleContent;
