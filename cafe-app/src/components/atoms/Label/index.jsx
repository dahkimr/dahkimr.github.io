import React from 'react';
import Typography from "components/atoms/Typography";
import { COLOURS } from 'styles/variables';
import styles from "./styles.module.scss";

const Label = ({text}) => {
  return (
    <div className={styles.label}>
        <Typography.Label text={text} color={COLOURS.white} />
    </div>
  )
};

export default Label;