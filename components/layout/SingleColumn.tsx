import React from "react";
import Image from "next/image";

import styles from "@/styles/layout/SingleColumn.module.scss";
import { Footer } from "../00_templates/Footer";

interface TypeProps {
  children: React.ReactNode;
  maxWidth?: string;
  flex?: boolean;
}

export const SingleColumn: React.VFC<TypeProps> = ({
  children,
  maxWidth = "925px",
  flex = false,
}: TypeProps) => {
  return (
    <div className={styles.content}>
      <section
        className={styles.section}
        style={flex ? { maxWidth, display: "flex" } : { maxWidth }}
      >
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default SingleColumn;
