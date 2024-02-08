import Typography from 'components/atoms/Typography';
import React from 'react';
import HTKImage from "assets/htk.png";
import AboutMeImage from "assets/htk-about.png";
import ListItem from 'components/atoms/ListItem';
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";
import { useNavigate } from 'react-router-dom';
import IconTitle from 'components/molecules/IconTitle';

const HealingTrauma = () => {

  return (
    <div className={styles.container}>
      <div className={styles.centerAlign}>
        <Typography.ProjectTitle text="Healing Trauma Therapy Website" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.imgContainer}>
        <a href="https://healingtraumakorea.com/">
          <img src={HTKImage} className={styles.img} />
        </a>
      </div>
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
        <Typography.SectionTitle2 text="Scroll Animation" color={COLOURS.darkGreen} />
      </div>
      <div className={styles.highlightPadded}>
        <img src={AboutMeImage} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Problem />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Solution />
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
        <img src={AboutMeImage} className={styles.projectImg} />
      </div>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Goal />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Problem />
          </div>
          <ul>
            <li>I used this and that to get the desired resulting aesthetic to customize</li>
            <li>I also used blah and blah to get the form to open and close when it needs to.</li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>
            <IconTitle.Solution />
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

export default HealingTrauma;