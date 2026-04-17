import Typography from 'components/atoms/Typography';
import React from 'react';
import { motion as m } from "framer-motion";
import VerticalSpacer from 'components/atoms/VerticalSpacer';
import IconTitle from 'components/molecules/IconTitle';
import MainImage from "assets/journalpet.png";
import UserflowImage from "assets/journalpet-userflow.png";
import WireframeImage from "assets/journalpet-wireframes.png";
import PersonasImage from "assets/journalpet-personas.png";
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "../styles.module.scss";

const JournalPet = () => {

  return (
    <div className={styles.container}>
      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className={styles.centerAlign}>
          <Typography.ProjectTitle text="Journal Pet" color={COLOURS.darkGreen} />
        </div>
        <div className={styles.imgContainer}>
          <a href="https://www.figma.com/proto/0mm7aXBDvyE4Q7yeeHDkTR/UI%2FUX-Course-Homework?page-id=0%3A1&node-id=47-44&viewport=-5459%2C-577%2C0.63&t=aAlIZnSegBVmi4Ge-1&scaling=contain&content-scaling=fixed">
            <img src={MainImage} className={styles.img} />
          </a>
        </div>
      </m.div>
      <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="My goal was to create an app that could help people who go to therapy keep track of their experiences in-between sessions." color={COLOURS.whiteGreen} />
          <ListItem text="I built a prototype based on the design pipeline, including user research, user flow cahrts, and heuristic checks." color={COLOURS.whiteGreen} />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Design Process" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* Userflow & Wireframes */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Userflow & Wireframes" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={UserflowImage} className={styles.projectImg} />
        <VerticalSpacer height="20px" />
        <img src={WireframeImage} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="Plot out the user journey and make design choices that provides a smooth user experience." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Process />
          </div>
            <Typography.CardDescription2 text="Designed the home page so users can easily create new journal entries and log their exercises." />
        </div>
      </div>
      {/* User research & personas */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="User research & personas" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={PersonasImage} className={styles.projectImg} />
        {/* <VerticalSpacer height="20px" />
        <img src={WireframeImage} className={styles.projectImg} /> */}
      </div>
    </div>
    );
}

export default JournalPet;