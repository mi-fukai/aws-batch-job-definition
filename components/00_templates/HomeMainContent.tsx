import React from "react";
import styles from "@/styles/00_templates/HomeMainContent.module.css";
import { TitleContent } from "@/components/20_molecules/TitleContent";
import { SearchBox } from "@/components/10_organisms/SearchBox";

interface TypeProps {}

export const HomeMainContent: React.VFC<TypeProps> = () => {
  return (
    <div className={styles.flex}>
      <TitleContent />
      <SearchBox />
    </div>
  );
};
