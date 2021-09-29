import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useRouter } from "next/router";

import { AutoCompleteTextField } from "@/components/20_molecules/AutoCompleteTextField";
import styles from "@/styles/10_organisms/SearchBox.module.css";

interface TypeProps {
  oneLine?: boolean;
  defaultSearchText?: string;
}

export const SearchBox: React.VFC<TypeProps> = ({
  oneLine = false,
  defaultSearchText = "",
}: TypeProps) => {
  const [searchText, setSearchText] = useState(defaultSearchText);

  const router = useRouter();
  const searchOfferContent = () => {
    router.push(`/search/${searchText}`);
  };
  const handleSubmit = (event) => {
    searchOfferContent();
    event.preventDefault();
  };

  return (
    <form
      className={styles.form}
      style={oneLine ? { flexDirection: "row" } : { flexDirection: "column" }}
      onSubmit={handleSubmit}
    >
      <AutoCompleteTextField
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <Button variant="contained" color="primary" onClick={searchOfferContent}>
        検索
      </Button>
    </form>
  );
};
