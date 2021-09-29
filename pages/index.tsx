import React from "react";

import styles from "@/styles/pages/Home.module.css";
import { SingleColumn } from "@/components/layout/SingleColumn";
import { HomeMainContent } from "@/components/00_templates/HomeMainContent";

const Home: React.VFC = () => {
  return (
    <main className={styles.main}>
      <SingleColumn flex>
        <div className={styles.content}>
          <HomeMainContent />
        </div>
      </SingleColumn>
    </main>
  );
};

export default Home;
