import React from 'react';
import { Typography, Box, Paper, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel'; // Asegúrate de instalar react-material-ui-carousel

// Importa tus imágenes locales
import pro11 from '../img/pro11.png';
import pro12 from '../img/pro12.png';
import pro13 from '../img/pro13.png';
import pro14 from '../img/pro14.png';
import pro21 from '../img/pro21.png';
import pro22 from '../img/pro22.png';
import pro23 from '../img/pro23.png';
import pro24 from '../img/pro24.png';
import pro31 from '../img/pro31.png';
import pro32 from '../img/pro32.png';
import pro33 from '../img/pro33.png';
import pro34 from '../img/pro34.png';

const projects = [
  {
    title: 'Tienda E-Commerce',
    description: 'Este proyecto fue desarrollado para un cliente en el sector de ventas en línea. Utiliza React y Material UI para crear una interfaz de usuario moderna y funcional, proporcionando una experiencia de compra fluida y agradable. Incluye características como un carrito de compras, opciones de pago y gestión de productos.',
    date: 'Publicado el 01/01/2023',
    link: 'https://francisalonso.github.io/materialui/',
    images: [
      pro11,
      pro12,
      pro13,
      pro14,
    ],
  },

  {
    title: 'Asesorías Contables',
    description: 'Este proyecto fue creado para un cliente en el sector de asesorías contables. La aplicación está construida con React y Material UI para ofrecer una interfaz de usuario intuitiva. Incluye características como la gestión de clientes, seguimiento de proyectos contables, y generación de informes financieros.',
    date: 'Publicado el 15/03/2023',
    link: 'https://francisalonso.github.io/Onepage/',
    images: [
      pro21,
      pro22,
      pro23,
      pro24,
    ],
  },

  {
    title: 'Estadística y Análisis',
    description: 'Desarrollado para un cliente especializado en análisis de datos, este proyecto utiliza React y Material UI para proporcionar una plataforma robusta para la visualización y análisis de datos. Incluye gráficos interactivos, generación de reportes detallados y herramientas para la manipulación de grandes conjuntos de datos.',
    date: 'Publicado el 30/06/2023',
    link: 'https://francisalonso.github.io/EstadisticasGraficas/',
    images: [
      pro31,
      pro32,
      pro33,
      pro34,
    ],
  },
];

const ProjectPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#a5d6a7', // Verde claro
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: theme.shadows[5],
  },
}));

const Projects = () => {
  return (
    <Box my={4} id="projects" sx={{ backgroundColor: '#c8e6c9', padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Proyectos
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProjectPaper elevation={3}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body1" paragraph>
                {project.description}
              </Typography>
              <Typography variant="caption" display="block" paragraph>
                {project.date}
              </Typography>
              <Carousel>
                {project.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    alt={`Slide ${imgIndex + 1}`}
                    style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px', objectFit: 'contain', borderRadius: '8px' }}
                  />
                ))}
              </Carousel>
              <Button variant="contained" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                Ir al sitio
              </Button>
            </ProjectPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
