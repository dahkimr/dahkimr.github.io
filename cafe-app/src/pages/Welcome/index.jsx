import React from "react";
import "./styles.scss";
import Typography from "components/atoms/Typography";
import PrimaryButton from "components/atoms/Buttons/PrimaryButton";
import VerticalSpacer from "components/atoms/VerticalSpacer";
import HeroImage from "assets/boba-hero-img-min.png";
import { COLOURS } from "styles/variables";

const Welcome = () => (
    <div className="container">
        <img src={HeroImage} className="hero-image" />
        <div className="content">
            <Typography.Heading1 text={"Welcome to \nDahee's Cafe"} color={COLOURS.darkGreen} />
            <VerticalSpacer height="24px" />
            <PrimaryButton text="See Menu" color={COLOURS.darkGreen} />
        </div>
    </div>
);

export default Welcome;