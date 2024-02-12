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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

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
                        <div className={styles.mainText}>
                            <Typography.Heading1 text={"Hello, I'm Dahee"} color={COLOURS.darkGreen} />
                        </div>
                        <div className={styles.headingTextContainer}>
                            <Typography.Heading2 text={`A full stack developer & designer who brews websites that are as delightful and refreshing as bubble tea`} color={COLOURS.darkGreen} />
                        </div>
                    </div>
                    <div className={styles.iconLinks}>
                        <a href="https://www.linkedin.com/in/dahee-kim">
                            <LinkedInIcon sx={{ fontSize: 36 }} />
                        </a>
                        <a href="https://github.com/dahkimr/">
                            <GithubIcon sx={{ fontSize: 36 }} />
                        </a>
                    </div>
                    <VerticalSpacer height="24px" />
                    <div>
                        <PrimaryButton text="See Projects" color={COLOURS.darkGreen} handleClick={handleClick}/>
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