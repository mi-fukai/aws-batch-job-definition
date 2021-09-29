import React from "react";

import { Card } from "@material-ui/core";
import styles from "/styles/layout/SearchLayout.module.css";
import { OffersSearchForm } from "@/components/modules/OffersSearchForm";

interface TypeProps {
  defaultSearchText: string;
  children: React.ReactNode;
}

export const SearchLayout: React.VFC<TypeProps> = ({
  defaultSearchText = "hoge",
  children,
}) => {
  return (
    <section className={styles.parent}>
      <aside className={styles.aside}>
        {/* 検索フォームカード */}
        <Card className={styles.searchCard}>
          検索
          <OffersSearchForm size="small" />
        </Card>
        {/* こだわりカード */}
        <Card className={styles.contentCard}>
          <p>keyword</p>
        </Card>
      </aside>
      <article>{children}</article>
    </section>
  );
};
