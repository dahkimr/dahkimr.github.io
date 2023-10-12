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
        <m.div
            className={styles.container}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}  
            // exit={{ opacity: 0 }}  
        >
            <div className={styles.content}>
                <Typography.Heading1 text={"Welcome to \nDahee's Cafe"} color={COLOURS.darkGreen} />
                <VerticalSpacer height="24px" />
                <PrimaryButton text="See Menu" color={COLOURS.darkGreen} handleClick={handleClick}/>
            </div>
        </m.div>
    );
};

export default Welcome;