import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import titoColtaucoImage from '../img/titoColtauco.png'; // Asegúrate de que la ruta sea correcta
import disanCifuentesImage from '../img/disanCifuentes.png'; // Asegúrate de que la ruta sea correcta

const ExperienceContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#b2dfdb', // Verde claro
}));

const ExperiencePaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
}));

const ExperienceImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(2),
}));

const experiences = [
  {
    title: 'Desarrollador Web en TitoColtauco',
    startDate: '01/01/2020',
    endDate: '31/12/2020',
    description: 'Trabajé para una tienda de abarrotes en la implementación de su página web. Implementé un carrito de compras y ayudé a mostrar sus productos de manera interesante. El proyecto fue desarrollado con React y Material UI.',
    image: titoColtaucoImage,
  },
  {
    title: 'Desarrollador Web en Asesorías Disan Cifuentes',
    startDate: '01/03/2021',
    endDate: '30/11/2021',
    description: 'Desarrollé un sitio web para Asesorías Disan Cifuentes, donde ofrecen servicios contables. El proyecto fue desarrollado con React y Material UI.',
    image: disanCifuentesImage,
  },
];

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <Typography variant="h4" gutterBottom align="center" style={{ fontFamily: 'Lobster, cursive' }}>
        Experiencia
      </Typography>
      <Grid container spacing={2}>
        {experiences.map((experience, index) => (
          <Grid item xs={12} md={6} key={index}>
            <ExperiencePaper elevation={3}>
              <ExperienceImage src={experience.image} alt={experience.title} />
              <Typography variant="h6" style={{ fontFamily: 'Lobster, cursive' }}>{experience.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {experience.startDate} - {experience.endDate}
              </Typography>
              <Typography variant="body1">
                {experience.description}
              </Typography>
            </ExperiencePaper>
          </Grid>
        ))}
      </Grid>
    </ExperienceContainer>
  );
};

export default Experience;
