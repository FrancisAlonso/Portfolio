import React from 'react';
import { Typography, Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import francisImage from '../img/francis.png'; // Asegúrate de que la ruta sea correcta

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: 'auto',
  boxShadow: theme.shadows[5],
  animation: `${fadeIn} 2s ease-in-out`,
  backgroundColor: '#a5d6a7', // Color verde para coincidir con la temática
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(4),
}));

const About = () => {
  return (
    <Box my={4} display="flex" justifyContent="center">
      <StyledCard>
        <Grid container>
          <Grid item xs={12} md={4}>
            <CardMedia
              component="img"
              alt="Sobre mí"
              height="100%"
              image={francisImage} // Usar la imagen importada
              title="Sobre mí"
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <StyledCardContent>
              <Typography variant="h4" gutterBottom>
                Sobre Mí
              </Typography>
              <Typography variant="body1" paragraph>
                Soy un desarrollador front end apasionado por la creación de aplicaciones web intuitivas y funcionales. 
                Tengo experiencia en tecnologías como React, Material UI, JavaScript, HTML, CSS y más.
              </Typography>
              <Typography variant="body1" paragraph>
                Mi objetivo es siempre aprender y crecer como profesional, manteniéndome al día con las últimas tendencias y 
                mejores prácticas en el desarrollo web. Me encanta trabajar en equipo y colaborar con otros desarrolladores 
                para construir soluciones innovadoras y eficientes.
              </Typography>
              <Typography variant="body1" paragraph>
                Además de mi experiencia técnica, tengo habilidades en comunicación, resolución de problemas y gestión del 
                tiempo, lo que me permite manejar proyectos complejos y entregar resultados de alta calidad dentro de los 
                plazos establecidos.
              </Typography>
            </StyledCardContent>
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
}

export default About;
