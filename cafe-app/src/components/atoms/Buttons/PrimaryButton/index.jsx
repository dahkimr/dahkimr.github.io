import React from "react";
import Typography from "components/atoms/Typography";
import "./styles.scss";

const PrimaryButton = ({text}) => (
    <>
        <button className="primary front">
            <Typography.ButtonLabel text={text} />
        </button>
        <button className="primary behind">
            <Typography.ButtonLabel text={text} />
        </button>
    </>
);

export default PrimaryButton;