import React from "react";

import styles from "./styles.module.scss";

const Heading1 = ({text, color}) => (
    <div className={styles.heading1} style={{color}}>{text}</div>
);

const Heading2 = ({text, color}) => (
    <div className={styles.heading2} style={{color}}>{text}</div>
);

const ProjectTitle = ({text, color}) => (
    <div className={styles.projectTitle} style={{color}}>{text}</div>
);

const SubsectionTitle1 = ({text, color}) => (
    <div className={styles.subSectionTitle1} style={{color}}>{text}</div>
);

const SectionTitle1 = ({text, color}) => (
    <div className={styles.sectionTitle1} style={{color}}>{text}</div>
);

const SectionTitle2 = ({text, color}) => (
    <div className={styles.sectionTitle2} style={{color}}>{text}</div>
);

const PrimaryButtonLabel = ({text, color}) => (
    <div className={styles.primaryButtonLabel} style={{color}}>{text}</div>
);

const ButtonLabel = ({text, color}) => (
    <div className={styles.buttonLabel} style={{color}}>{text}</div>
);

const CardTitle1 = ({text, color}) => (
    <div className={styles.cardTitle1} style={{color}}>{text}</div>
);

const CardTitle2 = ({text, color}) => (
    <div className={styles.cardTitle2} style={{color}}>{text}</div>
);

const CardDescription1 = ({text, color}) => (
    <div className={styles.cardDescription1} style={{color}}>{text}</div>
);

const CardDescription2 = ({text, color}) => (
    <div className={styles.cardDescription2} style={{color}}>{text}</div>
);

const Label = ({text, color}) => (
    <div className={styles.label} style={{color}}>{text}</div>
);

const TabLabel = ({text, color}) => (
    <div className={styles.tabLabel} style={{color}}>{text}</div>
);

const Link = ({text, color}) => (
    <div className={styles.link} style={{color}}>{text}</div>
);

const ListItem = ({text, color}) => (
    <div className={styles.listItem} style={{color}}>{text}</div>
);

export default {
    Heading1,
    Heading2,
    ProjectTitle,
    SubsectionTitle1,
    SectionTitle1,
    SectionTitle2,
    PrimaryButtonLabel,
    ButtonLabel,
    CardTitle1,
    CardTitle2,
    CardDescription1,
    CardDescription2,
    Label,
    TabLabel,
    Link,
    ListItem,
};