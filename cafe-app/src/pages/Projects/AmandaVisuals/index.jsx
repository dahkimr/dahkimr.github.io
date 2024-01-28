import Typography from 'components/atoms/Typography';
import React from 'react';
import AmandaVisualsPortfolio from "assets/amandavisualsportfolio.png";
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";

const AmandaVisuals = () => {
  return (
    <div className={styles.container}>
      <Typography.ProjectTitle text="Amanda Visuals Portfolio" color={COLOURS.darkGreen} />
      <div className={styles.imgContainer}>
        <img src={AmandaVisualsPortfolio} className={styles.img} />
      </div>
    </div>
  );
}

export default AmandaVisuals;