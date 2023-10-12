import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { motion as m } from "framer-motion";
import CoffeeIcon from '@mui/icons-material/Coffee';
import IcecreamIcon from '@mui/icons-material/Icecream';
import BubbleTeaBrown from "assets/boba-brown.png";
import BubbleTeaGreen from "assets/boba-green.png";
import BubbleTeaPurple from "assets/boba-purple.png";
import styles from "./styles.module.scss";
import ProjectCard from "components/molecules/ProjectCard";

const Menu = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

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

    return (
        <m.div
            className={styles.container}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: "easeOut" }}  
            // exit={{ opacity: 0 }}  
        >
            <Box>
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="menu tabs"
                    centered
                    TabIndicatorProps={{style: {color: "red"}}}
                    sx={{
                        "& button": { color: "#7B9A85"}
                    }}
                >
                    <Tab
                        label="Websites"
                        icon={<CoffeeIcon />}
                        iconPosition="end"
                        {...a11yProps(0)}
                    />
                    <Tab
                        label="Graphic Design"
                        icon={<IcecreamIcon />}
                        iconPosition="end"
                        {...a11yProps(1)}
                    />
                    <Tab label="Games" {...a11yProps(2)} />
                </Tabs>
                <CustomTabPanel value={tabValue} index={0}>
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
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
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
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
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
                </CustomTabPanel>
            </Box>
        </m.div>
    );
};

export default Menu;