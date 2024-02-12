import Typography from 'components/atoms/Typography';
import React from 'react';
import MainImage from "assets/dailydesign.png";
import Image1 from "assets/design-001.png";
import Image2 from "assets/design-002.png";
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";

const DesignChallenge = () => {

  return (
    <div className={styles.container}>
      <div className={styles.centerAlign}>
        <Typography.ProjectTitle text="100 Days UI Design Challenge" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.mainImgContainer}>
        <a href="https://www.figma.com/file/nEKU5GQhW463sz6V0zPy9v/100-Days-of-UI-Design?type=design&node-id=1%3A2&mode=design&t=IX7mjmtMe9ceDQEn-1">
          <img src={MainImage} className={styles.mainImg} />
        </a>
      </div>
      <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Creating various UI designs for sign in forms, payments methods, etc." color={COLOURS.whiteGreen} />
          <ListItem text="Improving design skills through consistency and practice." color={COLOURS.whiteGreen} />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Designs" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* 001 */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="#001 - Sign Up" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.imageContainer}>
        <img src={Image1} className={styles.projectImg} />
      </div>
      {/* 002 */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="#002 - Credit Card Payment" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.imageContainer}>
        <img src={Image2} className={styles.projectImg} />
      </div>
    </div>
    );
}

export default DesignChallenge;