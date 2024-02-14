import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from 'components/atoms/Typography';
import { COLOURS } from 'styles/variables';
import styles from "./styles.module.scss";

const NavBar = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="/"><Typography.Logo text="DaheeDesigns" color={COLOURS.darkGreen} /></Link>
                <Link to="/menu"><Typography.NavLink text="Projects" color={COLOURS.darkGreen} /></Link>
            </nav>
        </header>
    );
}

// const NavBar = () => {
//     return (
//         <AppBar
//             sx={{
//                 "&": {
//                     backgroundColor: "transparent",
//                     boxShadow: "none",
//                     padding: "6px calc(1vw + 10px)"
//                 }
//             }}
//         >
//             <Toolbar>
//                 <div className={styles.links}>
//                     <Link to="/"><Typography.Link text="Home" color={COLOURS.darkGreen}/></Link>
//                 </div>
//             </Toolbar>
//         </AppBar>  
//     );
// };

export default NavBar;