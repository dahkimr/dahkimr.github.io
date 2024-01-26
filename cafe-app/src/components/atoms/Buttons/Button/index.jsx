import React from "react";
import Typography from "components/atoms/Typography";
import styles from "./styles.module.scss";

const Button = ({text, handleClick}) => (
    <>
        <button className={styles.button} onClick={handleClick}>
            <Typography.ButtonLabel text={text} />
        </button>
    </>
);

export default Button;