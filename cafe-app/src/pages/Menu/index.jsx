import React, { useState, useEffect } from "react";
import { Tabs, Tab, Grid } from "@mui/material";
import { motion as m, usePresence, useAnimate, stagger } from "framer-motion";
import CoffeeIcon from '@mui/icons-material/Coffee';
import IcecreamIcon from '@mui/icons-material/Icecream';
import BubbleTeaBrown from "assets/boba-brown.png";
import BubbleTeaGreen from "assets/boba-green.png";
import BubbleTeaPurple from "assets/boba-purple.png";
import IcecreamBrown from "assets/icecream-brown.png";
import IcecreamPurple from "assets/icecream-purple.png";
import IcecreamPink from "assets/icecream-pink.png";
import AmandaVisuals from "assets/amandavisuals.png";
import styles from "./styles.module.scss";
import ProjectCard from "components/molecules/ProjectCard";
import Typography from "components/atoms/Typography";
import { useNavigate } from "react-router-dom";

const Menu = () => {
    const [tabValue, setTabValue] = useState(0);

    const [isPresent, safeToRemove] = usePresence();
    const [scope, animate] = useAnimate();

    const handleChange = (_event, newValue) => {
        setTabValue(newValue);
    };

    const navigate = useNavigate();

    const CustomTabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <div className={styles.tabContainer}>
                        {children}
                    </div>
                )}
            </div>
        );
    };

    const a11yProps = (index) => {
        return {
            id: `menu-tab-${index}`,
            'aria-controls': `menu-tabpanel-${index}`,
        };
    };

    useEffect(() => {
        if (isPresent) {
            const moveAnimation = async () => {
                await animate(".projectCard", { opacity: [0, 1], y: ["20%", "0%"] }, { duration: 0.8, ease: "easeOut", delay: stagger(0.2) });
            };
            moveAnimation();
        } else {
            safeToRemove();
        }
    });

    return (
        <div
            className={styles.container}
            ref={scope}
        >
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: "100%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="menu tabs"
                    centered
                    TabIndicatorProps={{
                        style: {
                            height: "4px"
                        }
                    }}
                    sx={{
                        "& button": { 
                            color: "#538758",
                            textTransform: "none",
                            padding: "0 4px",
                            margin: "0 12px"
                        },
                        "& svg": {
                            width: "calc(1vw + 20px)",
                            height: "calc(1vw + 20px)"
                        }
                    }}
                >
                    <Tab
                        label={<Typography.TabLabel text="Websites" />}
                        icon={<CoffeeIcon />}
                        iconPosition="end"
                        {...a11yProps(0)}
                        disableRipple
                    />
                    <Tab
                        label={<Typography.TabLabel text="Graphic Design" />}
                        icon={<IcecreamIcon />}
                        iconPosition="end"
                        {...a11yProps(1)}
                        disableRipple
                    />
                    {/* <Tab
                        label={<Typography.TabLabel text="Games" />}
                        {...a11yProps(2)}
                        disableRipple
                    /> */}
                </Tabs>
            </m.div>
            <CustomTabPanel value={tabValue} index={0}>
                <div>
                    <ProjectCard
                        image={BubbleTeaBrown}
                        previewImage={AmandaVisuals}
                        text="Amanda Visuals"
                        description="Built a UI/UX Portfolio site for a client."
                        handleClick={() => navigate("/amandavisuals")}
                        labels={["WordPress", "Elementor"]}
                    />
                </div>
                <div>
                    <ProjectCard
                        image={BubbleTeaGreen}
                        previewImage={AmandaVisuals}
                        text="Healing Trauma Korea"
                        description="Therapy website and I'm adding more description later"
                        labels={["React", "HTML & CSS"]}
                    />
                </div>
                <div>
                    <ProjectCard
                        image={BubbleTeaPurple}
                        previewImage={AmandaVisuals}
                        text="Healing Trauma Korea"
                        description="Therapy website and I'm adding more description later"
                        labels={["React", "HTML & CSS"]}
                    />
                </div>
            </CustomTabPanel>
            <CustomTabPanel value={tabValue} index={1}>
                <ProjectCard
                    image={IcecreamBrown}
                    text="Healing Trauma Korea"
                    description="Therapy website and I'm adding more description later"
                    labels={["React", "HTML & CSS"]}
                />
                <ProjectCard
                    image={IcecreamPink}
                    text="Healing Trauma Korea"
                    description="Therapy website and I'm adding more description later"
                    labels={["React", "HTML & CSS"]}
                />
                <ProjectCard
                    image={IcecreamPurple}
                    text="Healing Trauma Korea"
                    description="Therapy website and I'm adding more description later"
                    labels={["React", "HTML & CSS"]}
                />
            </CustomTabPanel>
            {/* <CustomTabPanel value={tabValue} index={2}>
                <ProjectCard
                    image={BubbleTeaBrown}
                    text="Healing Trauma Korea"
                    description="Therapy website and I'm adding more description later"
                    labels={["React", "HTML & CSS"]}
                />
                <ProjectCard
                    image={BubbleTeaGreen}
                    text="Healing Trauma Korea"
                    description="Therapy website and I'm adding more description later"
                    labels={["React", "HTML & CSS"]}
                />
                <ProjectCard
                    image={BubbleTeaPurple}
                    text="Healing Trauma Korea"
                    description="Therapy website and I'm adding more description later"
                    labels={["React", "HTML & CSS"]}
                />
            </CustomTabPanel> */}
        </div>
    );
};

export default Menu;