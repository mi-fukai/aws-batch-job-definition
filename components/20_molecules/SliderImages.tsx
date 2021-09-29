import React from "react";
import Image from "next/image";
import { Typography } from "@material-ui/core";

import AwesomeSlider from "react-awesome-slider";

import styles from "@/styles/20_molecules/SliderImages.module.css"

interface TypeProps {
  children: string[];
}

export const SliderImages: React.VFC<TypeProps> = ({ children }: TypeProps) => {
  return (
    <AwesomeSlider className={styles.slider} bullets={false}>
      {children.map((image) => (
        <div key={image} className={styles.mainImage}>
          <Image
            key={image}
            src={image}
            alt="sliderImage"
            width={3700}
            height={2470}
          ></Image>
        </div>
      ))}
    </AwesomeSlider>
  );
};
