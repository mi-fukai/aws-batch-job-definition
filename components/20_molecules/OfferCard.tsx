import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

import styles from "@/styles/20_molecules/OfferCard.module.css";

export const OfferCard: React.VFC<TypeOffer> = ({
  id,
  offerId,
  title,
  salary,
}: TypeOffer) => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.content}>
        <Typography className={styles.title} variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="caption" component="p">
          {salary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">
          <Link href={`/detail/${offerId}`}>
            <a>詳細はこちら</a>
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default OfferCard;
