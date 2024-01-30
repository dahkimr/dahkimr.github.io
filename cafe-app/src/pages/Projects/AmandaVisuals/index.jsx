import Typography from 'components/atoms/Typography';
import React from 'react';
import AmandaVisualsPortfolio from "assets/amandavisuals.png";
import AmandaVisualsFormGif from "assets/amandavisuals-form.gif";
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
        <Typography.SectionTitle1 text="Overview" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Using Wordpress, I built a aesthetic and clean portfolio website for my client using their Figma designs." color={COLOURS.whiteGreen} />
          <ListItem text="I mainly used Elementor and wrote custom code for more customization such as animations triggered by scroll, and a custom form." color={COLOURS.whiteGreen} />
        </ul>
      </div>
      <div className={styles.highlightContainer}>
        <div className={styles.highlightPadded}>
          <Typography.SectionTitle1 text="Features" color={COLOURS.darkGreen} />
        </div>
      </div>
      {/* Case study animations */}
      <div className={styles.sectionTitle}>
        <Typography.SectionTitle2 text="Scroll Animation" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={AmandaVisualsFormGif} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <Typography.CardTitle1 text="Tools" color={COLOURS.whiteGreen} />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <Typography.CardTitle1 text="Process" color={COLOURS.whiteGreen} />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <Typography.CardTitle1 text="Result" color={COLOURS.whiteGreen} />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
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
            <Typography.CardTitle1 text="Tools" color={COLOURS.whiteGreen} />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <Typography.CardTitle1 text="Process" color={COLOURS.whiteGreen} />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <Typography.CardTitle1 text="Result" color={COLOURS.whiteGreen} />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
      </div>
      <div className={styles.aboutContainer}>
        <Typography.SectionTitle1 text="Testimonial from client" color={COLOURS.whiteGreen} />
        <ul className={styles.list}>
          <ListItem text="Using Wordpress, I built a aesthetic and clean portfolio website for my client using their Figma designs." color={COLOURS.whiteGreen} />
          <ListItem text="I mainly used Elementor and wrote custom code for more customization such as animations triggered by scroll, and a custom form." color={COLOURS.whiteGreen} />
        </ul>
      </div>
    </div>
    );
}

export default AmandaVisuals;