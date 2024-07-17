import React from 'react';
import { Typography, Box, Button, List, ListItem, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { FaInstagram, FaFacebook, FaSpotify, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '250px',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: '#a5d6a7',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    position: 'relative',
    width: '100%',
    height: 'auto',
    maxWidth: '100%',
    padding: theme.spacing(2),
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: '700',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Lobster, cursive',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

const HeaderButton = styled(Button)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
  justifyContent: 'flex-start',
  color: theme.palette.primary.contrastText,
  backgroundColor: '#81c784',
  '&:hover': {
    backgroundColor: '#66bb6a',
  },
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '100%',
}));

const SocialIconButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '1.5rem',
  '&:hover': {
    color: theme.palette.primary.main,
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textTransform: 'none',
}));

const Header = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeaderContainer>
      <Title variant="h4">Francis Alonso</Title>
      <Subtitle variant="h6">Desarrollador Web</Subtitle>
      <List>
        <ListItem disablePadding>
          <HeaderButton onClick={() => handleScrollToSection('projects')}>
            Proyectos
          </HeaderButton>
        </ListItem>
        <ListItem disablePadding>
          <HeaderButton onClick={() => handleScrollToSection('experience')}>
            Experiencia
          </HeaderButton>
        </ListItem>
        <ListItem disablePadding>
          <HeaderButton onClick={() => handleScrollToSection('education')}>
            Educación
          </HeaderButton>
        </ListItem>
        <ListItem disablePadding>
          <HeaderButton onClick={() => handleScrollToSection('about')}>
            Sobre Mi
          </HeaderButton>
        </ListItem>
        <ListItem disablePadding>
          <HeaderButton onClick={() => handleScrollToSection('contact')}>
            Contacto
          </HeaderButton>
        </ListItem>
      </List>
      <SocialContainer>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <SocialIconButton href="https://www.instagram.com/FransonAlonson" target="_blank" aria-label="Instagram">
              <FaInstagram />
              <Typography variant="caption">/FransonAlonson</Typography>
            </SocialIconButton>
          </Grid>
          <Grid item xs={6}>
            <SocialIconButton href="https://www.facebook.com/FrancisAlonso" target="_blank" aria-label="Facebook">
              <FaFacebook />
              <Typography variant="caption">Francis Alonso</Typography>
            </SocialIconButton>
          </Grid>
          <Grid item xs={6}>
            <SocialIconButton href="https://open.spotify.com/user/FransonA" target="_blank" aria-label="Spotify">
              <FaSpotify />
              <Typography variant="caption">/FransonA</Typography>
            </SocialIconButton>
          </Grid>
          <Grid item xs={6}>
            <SocialIconButton href="https://www.linkedin.com/in/francis-alonso/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
              <Typography variant="caption">in/francis-alonso/</Typography>
            </SocialIconButton>
          </Grid>
          <Grid item xs={6}>
            <SocialIconButton href="https://github.com/FrancisAlonso" target="_blank" aria-label="GitHub">
              <FaGithub />
              <Typography variant="caption">/FrancisAlonso</Typography>
            </SocialIconButton>
          </Grid>
          <Grid item xs={6}>
            <SocialIconButton href="https://wa.me/+56954018875" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
              <Typography variant="caption">+56954018875</Typography>
            </SocialIconButton>
          </Grid>
        </Grid>
      </SocialContainer>
    </HeaderContainer>
  );
};

export default Header;
