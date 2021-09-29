import React from "react";
import styles from "@/styles/20_molecules/OfferInformationContentRow.module.css";

interface TypeProps {
  children: {
    label: string;
    value: string
  }[];
}

export const OfferInformationContentRow: React.VFC<TypeProps> = ({
  children,
}: TypeProps) => {
  const isOneLine = children.length === 1;
  return (
    <div className={styles.content}>
      {isOneLine ? (
        <div className={styles.contentOneLine}>
          <p className={styles.contentLabel}>{children[0].label}</p>
          <p className={styles.contentText}>
            {children[0].value}
          </p>
        </div>
      ) : (
        <div className={styles.content}>
          {children.map((item) => {
            return (
              <div key={item.label} className={styles.contentChild}>
                <p className={styles.contentLabel}>{item.label}</p>
                <p className={styles.contentText}>
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OfferInformationContentRow;
