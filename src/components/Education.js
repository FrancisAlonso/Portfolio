import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { styled } from '@mui/system';
import uahLogo from '../img/uah.png'; // Asegúrate de que la ruta sea correcta
import inacapLogo from '../img/inacap.png'; // Asegúrate de que la ruta sea correcta

const EducationContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#dcedc8', // Verde claro
}));

const EducationPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const EducationImage = styled('img')(({ theme }) => ({
  width: '100px',
  height: 'auto',
  marginBottom: theme.spacing(2),
}));

const learningsUAH = [
  'Uso de herramientas tecnológicas para la investigación social',
  'Análisis estadístico y procesamiento de datos',
  'Desarrollo de informes y visualizaciones de datos',
];

const learningsINACAP = [
  'Desarrollo de aplicaciones web y móviles',
  'Diseño y gestión de bases de datos',
  'Implementación de redes y seguridad informática',
];

const Education = () => {
  return (
    <EducationContainer id="education">
      <Typography variant="h4" gutterBottom align="center" style={{ fontFamily: 'Lobster, cursive' }}>
        Educación
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <EducationPaper elevation={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <EducationImage src={uahLogo} alt="UAH Logo" />
              <Typography variant="h6" style={{ fontFamily: 'Lobster, cursive' }}>Sociología - UAH</Typography>
              <Typography variant="body2" color="textSecondary">
                Inicio: 01/03/2015 - Término: 30/12/2019
              </Typography>
              <Typography variant="body1" paragraph>
                Estudié Sociología en la Universidad Alberto Hurtado. Los tres aprendizajes más importantes para la informática en esta carrera son:
              </Typography>
              <ul>
                {learningsUAH.map((learning, index) => (
                  <li key={index}>
                    <Typography variant="body2">{learning}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </EducationPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <EducationPaper elevation={3}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <EducationImage src={inacapLogo} alt="INACAP Logo" />
              <Typography variant="h6" style={{ fontFamily: 'Lobster, cursive' }}>Ingeniería en Informática - INACAP</Typography>
              <Typography variant="body2" color="textSecondary">
                Inicio: 01/03/2020 - En curso
              </Typography>
              <Typography variant="body1" paragraph>
                Actualmente estudio Ingeniería en Informática en INACAP. Los tres aprendizajes más importantes para la informática en esta carrera son:
              </Typography>
              <ul>
                {learningsINACAP.map((learning, index) => (
                  <li key={index}>
                    <Typography variant="body2">{learning}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
          </EducationPaper>
        </Grid>
      </Grid>
    </EducationContainer>
  );
};

export default Education;
