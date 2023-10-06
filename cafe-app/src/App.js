import './App.css';
import Welcome from './pages/Welcome';
import Menu from 'pages/Menu';
import { createTheme, ThemeProvider } from '@mui/material';
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

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Welcome />
                <Menu />
            </div>
        </ThemeProvider>
    );
}

export default App;