import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { COLOURS } from 'styles/variables';
import styles from "./styles.module.scss";

const NavBar = () => {
    return (
        <AppBar
            sx={{
                "&": {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    padding: "6px calc(1vw + 10px)"
                }
            }}
        >
            <Toolbar>
                <div className={styles.links}>
                    <Link to="/"><Typography.Link text="Home" color={COLOURS.darkGreen}/></Link>
                    <Link to="/menu"><Typography.Link text="Menu" color={COLOURS.darkGreen}/></Link>
                    <Link to="/amandavisuals"><Typography.Link text="AV" color={COLOURS.darkGreen}/></Link>
                </div>
            </Toolbar>
        </AppBar>  
    );
};

export default NavBar;