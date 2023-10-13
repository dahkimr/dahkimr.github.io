import React from "react";

import styles from "./styles.module.scss";

const Heading1 = ({text, color}) => (
    <div className={styles.heading1} style={{color}}>{text}</div>
);

const ButtonLabel = ({text, color}) => (
    <div className={styles.buttonLabel} style={{color}}>{text}</div>
);

const CardTitle1 = ({text, color}) => (
    <div className={styles.cardTitle1} style={{color}}>{text}</div>
);

const CardDescription1 = ({text, color}) => (
    <div className={styles.cardDescription1} style={{color}}>{text}</div>
);

const Label = ({text, color}) => (
    <div className={styles.label} style={{color}}>{text}</div>
);

const TabLabel = ({text, color}) => (
    <div className={styles.tabLabel} style={{color}}>{text}</div>
);

const Link = ({text, color}) => (
    <div className={styles.link} style={{color}}>{text}</div>
)

export default {
    Heading1,
    ButtonLabel,
    CardTitle1,
    CardDescription1,
    Label,
    TabLabel,
    Link,
};