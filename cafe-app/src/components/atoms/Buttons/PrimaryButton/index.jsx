import React from "react";
import Typography from "components/atoms/Typography";
import "./styles.scss";

const PrimaryButton = ({text, handleClick}) => (
    <>
        <button className="primary front" onClick={handleClick}>
            <Typography.PrimaryButtonLabel text={text} />
        </button>
        <button className="primary behind">
            <Typography.PrimaryButtonLabel text={text} />
        </button>
    </>
);

export default PrimaryButton;