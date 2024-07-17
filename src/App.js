import React from 'react';
import { CssBaseline, ThemeProvider, Box, Container, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import Header from './components/Header';
import DeveloperInfo from './components/DeveloperInfo';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import SobreMi from './components/SobreMi';
import Contact from './components/Contact';
import Footer from './components/Footer';
import theme from './styles/theme';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(270deg, #e8f5e9, #d0f0c0, #a3d9a5, #81c784, #e8f5e9)',
  backgroundSize: '150% 150%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '250px', // Deja espacio para el header vertical
  margin: 0,
  animation: `${gradientAnimation} 30s ease infinite`,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '0',
  },
}));

const MainContainer = styled(Container)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3), // Asegura que haya espacio para el footer
  [theme.breakpoints.down('sm')]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GradientBackground>
        <Header />
        <MainContainer>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <DeveloperInfo />
            </Grid>
            <Grid item xs={12}>
              <Projects />
            </Grid>
            <Grid item xs={12}>
              <Experience />
            </Grid>
            <Grid item xs={12}>
              <Education />
            </Grid>
            <Grid item xs={12}>
              <SobreMi />
            </Grid>
            <Grid item xs={12}>
              <Contact />
            </Grid>
          </Grid>
        </MainContainer>
        <Footer />
      </GradientBackground>
    </ThemeProvider>
  );
}

export default App;
