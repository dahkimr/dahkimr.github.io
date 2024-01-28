import './App.css';
import Welcome from 'pages/Welcome';
import Menu from 'pages/Menu';
import AmandaVisuals from 'pages/Projects/AmandaVisuals';
import NavBar from 'components/molecules/NavBar';
import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { COLOURS } from 'styles/variables';

const App = () => {
    const theme = createTheme({
        palette: {
            primary: {
                main: COLOURS.darkGreen,
            }
        },
        typography: {
            fontFamily: "Poppins, sans-serif"
        }
    });

    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <AnimatePresence>
                <NavBar />
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Welcome />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/amandavisuals" element={<AmandaVisuals />} />
                </Routes>
            </AnimatePresence>
        </ThemeProvider>
    );
}

export default App;