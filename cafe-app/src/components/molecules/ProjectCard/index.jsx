import React from 'react';
import Typography from 'components/atoms/Typography';
import { COLOURS } from 'styles/variables';
import Label from 'components/atoms/Label';
import VerticalSpacer from 'components/atoms/VerticalSpacer';
import styles from "./styles.module.scss";

const ProjectCard = ({text, description, labels, image, alt}) => {
    const getLabels = labels.map((label) =>
        <div className={styles.rightSpace}><Label text={label} /></div>
    );

    return (
        <div className={styles.container}>
            <img src={image} alt={alt || "image"} className={styles.image} />
            <div className={styles.textContainer}>
                <Typography.CardTitle1 color={COLOURS.white} text={text} />
                <VerticalSpacer height="6px" />
                <Typography.CardDescription1 color={COLOURS.white} text={description} />
                <VerticalSpacer height="18px" />
                <div className={styles.labelContainer}>
                    {getLabels}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;