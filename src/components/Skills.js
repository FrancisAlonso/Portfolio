import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import cssVideo from '../img/css.mp4'; // Asegúrate de que la ruta sea correcta
import reactVideo from '../img/react.mp4'; // Asegúrate de que la ruta sea correcta
import uiVideo from '../img/ui.webm'; // Asegúrate de que la ruta sea correcta
import jsVideo from '../img/js.mp4'; // Asegúrate de que la ruta sea correcta
import gitVideo from '../img/git.webm'; // Asegúrate de que la ruta sea correcta
import mobileVideo from '../img/mobile.mp4'; // Asegúrate de que la ruta sea correcta

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
  backgroundColor: '#a5d6a7', // Verde por defecto
  transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[5],
    backgroundColor: color, // Cambia al color característico en hover
  },
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer', // Indica que es clicable
}));

const VideoContainer = styled('div')(({ theme }) => ({
  width: '100%', // Ajusta el ancho del contenedor del video
  maxWidth: '600px',
  height: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
  zIndex: 1000, // Asegurar que el video esté sobre otros elementos
  '& video': {
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
  },
}));

const SkillsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start', // Alinea los elementos al principio
  width: '100%',
  justifyContent: 'center', // Centra horizontalmente
  flexWrap: 'wrap', // Permite el ajuste de los elementos
}));

const SkillsGrid = styled(Grid)(({ theme }) => ({
  width: '100%', // Ajusta el ancho para dejar espacio para el video
  maxWidth: '1200px',
  display: 'flex',
  flexWrap: 'wrap', // Ajusta elementos en filas y columnas
  gap: theme.spacing(2), // Espacio entre elementos
}));

const Skills = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedVideo && videoRef.current) {
      const video = videoRef.current;
      const handleLoadedMetadata = () => {
        const { videoWidth, videoHeight } = video;
        const aspectRatio = videoWidth / videoHeight;
        const containerWidth = 600; // Establece el ancho del contenedor
        const containerHeight = containerWidth / aspectRatio;
        video.style.width = `${containerWidth}px`;
        video.style.height = `${containerHeight}px`;
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, [selectedVideo]);

  return (
    <SkillsContainer my={4}>
      <SkillsGrid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <StyledPaper
              elevation={3}
              color={skill.color}
              onMouseEnter={() => setSelectedVideo(skill.video)}
              onClick={() => setSelectedVideo(skill.video)}
            >
              <Typography variant="h6">
                {skill.name}
              </Typography>
            </StyledPaper>
          </Grid>
        ))}
      </SkillsGrid>
      <Box mt={4} width="100%" display="flex" justifyContent="center">
        {selectedVideo && (
          <VideoContainer>
            <video src={selectedVideo} autoPlay loop muted ref={videoRef} />
          </VideoContainer>
        )}
      </Box>
    </SkillsContainer>
  );
}

export default Skills;
