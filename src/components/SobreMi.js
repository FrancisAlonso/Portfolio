import React from 'react';
import { Typography, Box, Paper, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/system';
import { FaInstagram, FaFacebook, FaSpotify, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#c5e1a5', // Verde claro
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const AboutPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
  maxWidth: '800px',
  width: '100%',
}));

const SocialContainer = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  marginTop: theme.spacing(4),
  width: '100%',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  '&:hover': {
    color: theme.palette.primary.main,
  },
  fontSize: '2rem', // Aumenta el tamaño de los íconos
}));

const SobreMi = () => {
  return (
    <AboutContainer id="about">
      <Typography variant="h4" gutterBottom align="center" style={{ fontFamily: 'Lobster, cursive' }}>
        Sobre Mi
      </Typography>
      <AboutPaper elevation={3}>
        <Typography variant="body1">
          Soy un joven de 26 años dedicado al desarrollo web, con diversos gustos en música, deportes, series y tecnologías. Me apasiona crear aplicaciones web que sean intuitivas y fáciles de usar.
        </Typography>
        <Typography variant="body1" paragraph>
          Mi interés por la tecnología comenzó desde una edad temprana, y he continuado expandiendo mis habilidades y conocimientos a lo largo de los años. Me encanta trabajar en proyectos que desafían mis capacidades y me permiten crecer como desarrollador. Además de la tecnología, disfruto de la música, los deportes y las series, lo que me ayuda a mantener un equilibrio saludable entre trabajo y ocio.
        </Typography>
      </AboutPaper>
      <Typography variant="h6" gutterBottom align="center">
        Sígueme en mis redes sociales
      </Typography>
      <SocialContainer container spacing={4}>
        <Grid item xs={12} sm={4} md={2}>
          <Box textAlign="center">
            <SocialIconButton href="https://www.instagram.com/FransonAlonson" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconButton>
            <Typography variant="caption">/FransonAlonson</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Box textAlign="center">
            <SocialIconButton href="https://www.facebook.com/FrancisAlonso" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconButton>
            <Typography variant="caption">Francis Alonso</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Box textAlign="center">
            <SocialIconButton href="https://open.spotify.com/user/FransonA" target="_blank" aria-label="Spotify">
              <FaSpotify />
            </SocialIconButton>
            <Typography variant="caption">/FransonA</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Box textAlign="center">
            <SocialIconButton href="https://www.linkedin.com/in/francis-alonso/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconButton>
            <Typography variant="caption">in/francis-alonso/</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Box textAlign="center">
            <SocialIconButton href="https://github.com/FrancisAlonso" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialIconButton>
            <Typography variant="caption">/FrancisAlonso</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Box textAlign="center">
            <SocialIconButton href="https://wa.me/+56954018875" target="_blank" aria-label="WhatsApp">
              <FaWhatsapp />
            </SocialIconButton>
            <Typography variant="caption">+56954018875</Typography>
          </Box>
        </Grid>
      </SocialContainer>
    </AboutContainer>
  );
};

export default SobreMi;
