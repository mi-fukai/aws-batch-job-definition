import React from "react";
import { useRouter } from "next/router";
import { Pagination } from "@material-ui/lab";

import { SearchBox } from "@/components/10_organisms/SearchBox";
import { OfferList } from "@/components/10_organisms/OfferList";
import { TitleContent } from "@/components/20_molecules/TitleContent";

import styles from "@/styles/00_templates/SearchContents.module.css";

export const SearchContents = ({
  offers = [],
  defaultSearchText = "",
  total = 0,
  pager = 1,
}) => {
  const router = useRouter();
  const nextResultPage = (event, page) => {
    router.push(`/search/${defaultSearchText}?p=${page}`);
  };

  return (
    <>
      <div className={styles.title}>
        <TitleContent />
      </div>
      <SearchBox oneLine defaultSearchText={defaultSearchText} />
      <OfferList offers={offers} />
      <div className={styles.pagination}>
        <Pagination
          count={Math.trunc(total / 10) + 1}
          defaultPage={1}
          page={pager}
          onChange={nextResultPage}
        />
      </div>
    </>
  );
};
