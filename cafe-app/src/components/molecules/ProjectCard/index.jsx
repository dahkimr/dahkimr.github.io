import React, { useEffect, useState } from 'react';
import { useAnimate, usePresence, stagger } from 'framer-motion';
import Typography from 'components/atoms/Typography';
import { COLOURS } from 'styles/variables';
import Label from 'components/atoms/Label';
import VerticalSpacer from 'components/atoms/VerticalSpacer';
import styles from "./styles.module.scss";
import Button from 'components/atoms/Buttons/Button';

const ProjectCard = ({
        text, description, labels, image, alt,
        previewImage, previewAlt, pageLink,
    }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getLabels = labels.map((label) =>
        <div className={styles.rightSpace}><Label text={label} /></div>
    );

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = () => {

    };

    return (
        <a href={pageLink} className={styles.link}>
        <div className={styles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`${styles.projectContainer} projectCard`}
            >
                <div
                    className={styles.imgContainer}
                >
                    {isHovered ? 
                        <div className={styles.previewImgContainer}>
                            <div className={styles.previewImg} style={{backgroundImage: `url(${previewImage})`}} />
                        </div>
                    :
                    <img src={image} alt={alt || "image"} className={styles.image} />
                    }
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.cardTitle}>
                        <Typography.CardTitle1 color={COLOURS.white} text={text} />
                    </div>
                    <VerticalSpacer height="6px" />
                    <Typography.CardDescription1 color={COLOURS.white} text={description} />
                    <VerticalSpacer height="18px" />
                    <div className={styles.labelContainer}>
                        {getLabels}
                    </div>
                </div>
            </div>
        </div>
        </a>
    );
};

export default ProjectCard;