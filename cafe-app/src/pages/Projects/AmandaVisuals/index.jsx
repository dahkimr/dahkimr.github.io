import Typography from 'components/atoms/Typography';
import React from 'react';
import AmandaVisualsPortfolio from "assets/amandavisuals.png";
import AmandaVisualsFormGif from "assets/amandavisuals-form.gif";
import AmandaVisualsScrollGif from "assets/amandavisuals-scroll.gif";
import IconTitle from 'components/molecules/IconTitle';
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';

const AmandaVisuals = () => {

  return (
    <div className={styles.container}>
      <div className={styles.centerAlign}>
        <Typography.ProjectTitle text="Amanda Visuals Portfolio" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.imgContainer}>
        <a href="https://amandavisuals.com/">
          <img src={AmandaVisualsPortfolio} className={styles.img} />
        </a>
      </div>
      <div className={styles.aboutContainer}>
        <Typography.SubsectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="I developed a client's UI/UX Portfolio site using WordPress, Elementor, and custom code." color={COLOURS.whiteGreen} />
          <ListItem text="Utilizing the Figma designs she provided, I brought them to life, exercising my own judgment for the mobile versions." color={COLOURS.whiteGreen} />
          <ListItem text="Key components included the introduction page, case study pages, and contact form." color={COLOURS.whiteGreen} />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Key Features" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* Case study animations */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Scroll Animation" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={AmandaVisualsScrollGif} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="Smooth animations to add visual interest to the case study cards." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Problem /> 
          </div>
          <Typography.CardDescription2 text="I could add the card animation with Elementor's built in functions, but not having the cards appear when the user scrolls down." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Solution />
          </div>
          <Typography.CardDescription2 text="I used CSS classes and JQuery functions to reveal cards as users scroll down the page." />
        </div>
      </div>
      {/* Contact Form */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Contact Form" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={AmandaVisualsFormGif} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <Typography.CardDescription2 text="An aesthetic and functional contact form that appears on the corner of the screen with a slide in animation." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Problem />
          </div>
          <Typography.CardDescription2 text="Built in free functions only allowed me to have a form overlay that took up the whole screen." />
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Solution />
          </div>
          <Typography.CardDescription2 text="I used JQuery functions to have the form appear and disappear, and used CSS to change the appearance of the default form." />
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <Typography.SubsectionTitle1 text="Testimonial from client" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="In our most recent project she had flawless execution, excellent communication and a great eye for detail." color={COLOURS.whiteGreen} />
          <ListItem text="Over all, she is reliable, prompt, and has a genuine passion in her work. I highly recommend her and look forward to working with her in the future." color={COLOURS.whiteGreen} />
        </ul>
      </div>
    </div>
    );
}

export default AmandaVisuals;