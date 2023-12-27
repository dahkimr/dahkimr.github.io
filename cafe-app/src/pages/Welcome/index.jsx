import React from "react";
import  { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Typography from "components/atoms/Typography";
import PrimaryButton from "components/atoms/Buttons/PrimaryButton";
import VerticalSpacer from "components/atoms/VerticalSpacer";
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";
import Blob1 from "assets/blob1.svg";
import Blob2 from "assets/blob2.svg";
import Background from "assets/boba-hero-img-min.png";

const Welcome = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/menu");

    return (
        <div className={styles.container}>
            <m.div
                className={styles.headingContainer}
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.14 }} 
            >
                <div className={styles.headingContainer}>
                    <div className={styles.headingText}>
                        <Typography.Heading1 text={"Hello, I'm Dahee"} color={COLOURS.darkGreen} />
                        <Typography.Heading2 text={"Programmer, designer, and gamer"} color={COLOURS.darkGreen} />
                    </div>
                    <VerticalSpacer height="24px" />
                    <div>
                        <PrimaryButton text="See Menu" color={COLOURS.darkGreen} handleClick={handleClick}/>
                    </div>
                </div>
            </m.div>
            <div className={styles.imageContainer}>
                <img src={Background} className={styles.image} />
            </div>
            <div className={styles.blobContainer}>
                <img src={Blob1} className={`${styles.blob} ${styles.one}`} />
                <img src={Blob2} className={`${styles.blob} ${styles.two}`} />
            </div>
        </div>
    );
};

export default Welcome;