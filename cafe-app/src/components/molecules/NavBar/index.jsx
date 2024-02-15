import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { COLOURS } from 'styles/variables';
import styles from "./styles.module.scss";

const NavBar = ({ location }) => {
    var isHomePage = null;

    useEffect(() => {
        isHomePage = location.pathname === "/";
    });

    return (
        <header
            style={{
                backgroundColor: location.pathname === "/" ? "transparent" : "#89b188",
                boxShadow: location.pathname === "/" ? "none" : "0px 2px 10px rgba(46, 74, 55, 0.6)"

            }}
            className={styles.header}
        >
            <nav>
                <Link to="/"><Typography.Logo text="DaheeDesigns" color={COLOURS.darkGreen} /></Link>
                <Link to="/menu"><Typography.NavLink text="Projects" color={COLOURS.darkGreen} /></Link>
            </nav>
        </header>
    );
};

export default NavBar;