import Typography from 'components/atoms/Typography';
import React from 'react';
import MainImage from "assets/indie.png";
import CategoryGif from "assets/indie-category.gif";
import SignUpImage from "assets/indie-signup.png";
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import IconTitle from 'components/molecules/IconTitle';

const IndieSnowfall = () => {

  return (
    <div className={styles.container}>
      <div className={styles.centerAlign}>
        <Typography.ProjectTitle text="Indie Game Website" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.imgContainer}>
        <a href="https://www.figma.com/proto/ROWskZjPSGin69DI7K9koW/Indie-Snowfall?page-id=0%3A1&type=design&node-id=425-201&viewport=614%2C-935%2C0.25&t=m3PhNyIKDJBs5IQg-1&scaling=min-zoom&mode=design">
          <img src={MainImage} className={styles.img} />
        </a>
      </div>
      <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Since big company game titles are more heavily marketted, I conceptualized a website where people can discover new games to play by indie companies." color={COLOURS.whiteGreen} />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Features" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* Case study animations */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Game Categories" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={CategoryGif} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="Show different categories of games so users can look for more games in the category they enjoy." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
          <Typography.CardDescription2 text="Kept the Netflix style of a card carousel, but put a gamer spin on it by placing the cards in a console." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Process />
          </div>
          <Typography.CardDescription2 text="Used Figma's prototyping tools to make the d-pad clickable and only highlight the buttons when there's more content." />
        </div>
      </div>
      {/* Contact Form */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Sign Up Page" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={SignUpImage} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="A sign up form that follows UI design principles and matches the theme of the site." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
          <Typography.CardDescription2 text="Used the brand colours and kept the form white so the text is clear. Added small elements (e.g. the d-pad and the paw) next to the text to tie in this form to the rest of the site." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.DesignChoice />
          </div>
          <Typography.CardDescription2 text="Brought over assets from other pages (e.g. the cat and controller) to create more visual interest." />
        </div>
      </div>
      {/* <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Testimonial from client" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Using Wordpress, I built a aesthetic and clean portfolio website for my client using their Figma designs." color={COLOURS.whiteGreen} />
          <ListItem text="I mainly used Elementor and wrote custom code for more customization such as animations triggered by scroll, and a custom form." color={COLOURS.whiteGreen} />
        </ul>
      </div> */}
    </div>
    );
}

export default IndieSnowfall;