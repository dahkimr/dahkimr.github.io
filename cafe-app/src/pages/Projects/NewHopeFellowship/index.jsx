import Typography from 'components/atoms/Typography';
import React from 'react';
import MainImage from "assets/newhope.png";
import ClothingImage from "assets/newhope-clothing.png";
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import IconTitle from 'components/molecules/IconTitle';

const NewHopeFellowship = () => {

  return (
    <div className={styles.container}>
      <div className={styles.centerAlign}>
        <Typography.ProjectTitle text="New Hope Fellowship Marketting" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.imgContainer}>
        <a href="https://www.instagram.com/nhfdowntown/">
          <img src={MainImage} className={styles.img} />
        </a>
      </div>
      <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Designed multiple posters and social media posts to promote events. Created custom hand-drawn assets and svg illustrations to use in designs." color="white" />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Events" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* Case study animations */}
      <div className={styles.market}>
        <div className={styles.sectionTitle}>
          <Typography.SectionTitle2 text="Christmas Market" color={COLOURS.darkGreen} />
        </div>
        <div className={styles.highlightPadded}>
          <img src={MainImage} className={styles.projectImg} />
        </div>
        <div className={styles.processContainer}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <IconTitle.Process />
            </div>
            <Typography.CardDescription2 text="Created a gridded design in black and white with placeholders to refine the layout and idea first. Then filled in the design with information and images." color="white" />
          </div>
          <div className={`${styles.card}`}>
            <div className={styles.cardTitle}>
              <IconTitle.DesignChoice />
            </div>
            <Typography.CardDescription2 text="Chose a color palette that matched the Christmas and cheery vibe of the event. Created custom svg images to showcase the activities and food at the market." />
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <IconTitle.Result />
            </div>
            <Typography.CardDescription2 text="40+ people came out to the market and we earned over $500 from sales and donations." />
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div className={styles.clothing}>
        <div className={styles.sectionTitle}>
          <Typography.SectionTitle2 text="Clothing Swap" />
        </div>
        <div className={styles.highlightPadded}>
          <img src={ClothingImage} className={styles.projectImg} />
        </div>
        <div className={styles.processContainer}>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <IconTitle.DesignChoice />
            </div>
            <Typography.CardDescription2 text="Chose a orange and green colour palette since this was a fall event. Placed event info in speech bubbles to give the impression that people are talking about the event and spreading news about it." />
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <IconTitle.DesignChoice />
            </div>
            <Typography.CardDescription2 text="Drew various fall clothing items to give examples of what to bring. The background color looked flat so added a little bit of noise to add texture to it." />
          </div>
          <div className={styles.card}>
            <div className={styles.cardTitle}>
              <IconTitle.Result />
            </div>
            <Typography.CardDescription2 text="20+ people came out to bring and look at clothes. We had substantial clothing donations which were given to Yonge Street Missions after the event." />
          </div>
        </div>
      </div>
    </div>
    );
}

export default NewHopeFellowship;