import React from "react";
import { OfferCard } from "@/components/20_molecules/OfferCard";

interface TypeProps {
  offers: TypeOffer[];
}

export const OfferList: React.VFC<TypeProps> = ({ offers }: TypeProps) => {
  return (
    <>
      {offers.map((item) => {
        return (
          <OfferCard
            key={item.id}
            id={item.id}
            offerId={item.offerId}
            title={item.title}
            salary={item.salary}
          />
        );
      })}
    </>
  );
};
