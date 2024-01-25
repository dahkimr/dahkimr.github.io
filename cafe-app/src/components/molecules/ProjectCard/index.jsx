import React, { useEffect, useState } from 'react';
import { useAnimate, usePresence, stagger } from 'framer-motion';
import Typography from 'components/atoms/Typography';
import { COLOURS } from 'styles/variables';
import Label from 'components/atoms/Label';
import VerticalSpacer from 'components/atoms/VerticalSpacer';
import styles from "./styles.module.scss";

const ProjectCard = ({
        text, description, labels, image, alt,
        previewImage, previewAlt
    }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [pos, setPos] = useState({x: 0, y:0});

    const getLabels = labels.map((label) =>
        <div className={styles.rightSpace}><Label text={label} /></div>
    );

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseMove = (e) => {
        console.log(pos);
        setPos({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className={styles.container}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        >
                
        {isHovered && previewImage &&
        <div style={{top: pos.y, left: pos.x}} className={styles.previewContainer}>
                <img src={previewImage} alt={previewAlt | "image"} className={styles.previewImg} />
            </div>
        }
            <div
                className={`${styles.projectContainer} projectCard`}
                onMouseEnter={handleMouseEnter}
            >
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
        </div>
    );
};

export default ProjectCard;