import React, { useState, useEffect } from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import francisImage from '../img/francis2.png'; // Asegúrate de que la ruta sea correcta
import cssVideo from '../img/css.mp4'; // Asegúrate de que la ruta sea correcta
import reactVideo from '../img/react.mp4'; // Asegúrate de que la ruta sea correcta
import uiVideo from '../img/ui.webm'; // Asegúrate de que la ruta sea correcta
import jsVideo from '../img/js.mp4'; // Asegúrate de que la ruta sea correcta
import gitVideo from '../img/git.webm'; // Asegúrate de que la ruta sea correcta
import mobileVideo from '../img/mobile.mp4'; // Asegúrate de que la ruta sea correcta

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const InfoBox = styled(Paper)(({ theme }) => ({
  width: '100%',
  margin: 'auto',
  boxShadow: theme.shadows[5],
  animation: `${fadeIn} 2s ease-in-out`,
  backgroundColor: '#ffffff', // Fondo blanco para el contenedor
  display: 'flex',
  padding: 0, // Asegurarse de que no haya padding
  height: 'auto', // Permitir que la altura se ajuste al contenido
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`, // Ajustar solo los bordes necesarios
}));

const skills = [
  { name: 'React', color: '#61dafb', video: reactVideo },
  { name: 'Material UI', color: '#007fff', video: uiVideo },
  { name: 'JavaScript', color: '#f7df1e', video: jsVideo },
  { name: 'HTML & CSS', color: '#e34c26', video: cssVideo },
  { name: 'Git & GitHub', color: '#f1502f', video: gitVideo },
  { name: 'Responsive Design', color: '#3ddc84', video: mobileVideo },
];

const StyledPaper = styled(Paper)(({ theme, color }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  backgroundColor: '#a5d6a7',
  transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[5],
    backgroundColor: color,
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '0.8rem', // Asegura que el tamaño del texto sea adecuado
  margin: 'auto', // Centra los elementos dentro de su contenedor
}));

const SkillsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // Alinea las filas de manera horizontal
  gap: theme.spacing(2), // Más espacio entre filas
  flexWrap: 'wrap',
  justifyContent: 'center', // Centrar los elementos
}));

const VideoContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '300px', // Establece una altura fija para el contenedor del video
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  overflow: 'hidden', // Asegura que el contenido que sobrepase el contenedor se oculte
  marginTop: theme.spacing(2),
  '& video': {
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
  },
}));

const DeveloperInfo = () => {
  const [selectedVideo, setSelectedVideo] = useState(reactVideo);

  useEffect(() => {
    setSelectedVideo(reactVideo); // Establecer el primer video al cargar la página
  }, []);

  return (
    <InfoBox>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <StyledImage alt="Francis" src={francisImage} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box padding={2}>
            <Typography variant="h4" gutterBottom>
              Francis Alonso
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Desarrollador Web
            </Typography>
            <Typography variant="body1" paragraph>
              Soy un desarrollador front end con experiencia en React, Material UI, y otras tecnologías web. Me apasiona crear interfaces de usuario intuitivas y funcionales.
            </Typography>
            <Typography variant="body1" paragraph>
              A continuación, puedes encontrar más información sobre mis habilidades y proyectos.
            </Typography>
            <SkillsGrid container spacing={2}>
              {skills.map((skill, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <StyledPaper
                    elevation={3}
                    color={skill.color}
                    onMouseEnter={() => setSelectedVideo(skill.video)}
                  >
                    <Typography variant="h6">
                      {skill.name}
                    </Typography>
                  </StyledPaper>
                </Grid>
              ))}
            </SkillsGrid>
            {selectedVideo && (
              <VideoContainer>
                <video src={selectedVideo} controls autoPlay loop muted />
              </VideoContainer>
            )}
          </Box>
        </Grid>
      </Grid>
    </InfoBox>
  );
}

export default DeveloperInfo;
