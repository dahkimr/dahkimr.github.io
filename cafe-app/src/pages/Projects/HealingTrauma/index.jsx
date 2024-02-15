import Typography from 'components/atoms/Typography';
import React from 'react';
import { motion as m } from "framer-motion";
import HTKImage from "assets/htk.png";
import AboutMeImage from "assets/htk-about.png";
import HealingImage from "assets/htk-healing.png";
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "../styles.module.scss";
import IconTitle from 'components/molecules/IconTitle';

const HealingTrauma = () => {

  return (
    <div className={styles.container}>
      <m.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className={styles.centerAlign}>
          <Typography.ProjectTitle text="Healing Trauma Therapy Website" color={COLOURS.darkGreen} />
        </div>
        <div className={styles.imgContainer}>
          <a href="https://healingtraumakorea.com/">
            <img src={HTKImage} className={styles.img} />
          </a>
        </div>
      </m.div>
      <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Starting from concepts in Figma, I finalized the design after consulting the client and coded the home page." color={COLOURS.whiteGreen} />
          <ListItem text="She wanted a site that was like a business card so I chose an image that reflected her practice's motto and put her contact info in the header." color={COLOURS.whiteGreen} />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Design" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* Case study animations */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="About Me Section" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={AboutMeImage} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="Give an introduction to the therapist including her main areas of therapy." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
            <Typography.CardDescription2 text="Showing a photo that represents the therapist well and put her motto alongside qualifications beside it." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
            <Typography.CardDescription2 text="Used brand colours (which were chosen to create a calming atmosphere) and icons to showcase the therapist's speciality areas." />
        </div>
      </div>
      {/* Contact Form */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Contact Form" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={HealingImage} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="To have a healing corner with images and quotes that soothe the soul." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
            <Typography.CardDescription2 text="Chose an image of a sunflower field to add an atmosphere of brightness and hope." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
            <Typography.CardDescription2 text="Displayed the therapist's hand-drawn image and a quote side by side like a gallery." />
        </div>
      </div>
    </div>
    );
}

export default HealingTrauma;