import React from "react";
import  { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Typography from "components/atoms/Typography";
import PrimaryButton from "components/atoms/Buttons/PrimaryButton";
import VerticalSpacer from "components/atoms/VerticalSpacer";
import { COLOURS } from "styles/variables";
import styles from "./styles.module.scss";

const Welcome = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate("/menu");

    return (
        <div className={styles.container}>
            <m.div
                className={styles.content}
                initial={{ opacity: 0, y: "10%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.14 }} 
            >
                <m.div
                >
                    <Typography.Heading1 text={"Welcome to \nDahee's Cafe"} color={COLOURS.darkGreen} />
                </m.div>
                <VerticalSpacer height="24px" />
                <m.div
                >
                    <PrimaryButton text="See Menu" color={COLOURS.darkGreen} handleClick={handleClick}/>
                </m.div>
            </m.div>
        </div>
    );
};

export default Welcome;