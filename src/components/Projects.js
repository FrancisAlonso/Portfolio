import React from 'react';
import { Typography, Box, Paper, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import Carousel from 'react-material-ui-carousel'; // Asegúrate de instalar react-material-ui-carousel

const projects = [
  {
    title: 'Tienda E-Commerce',
    description: 'Este proyecto fue desarrollado para un cliente en el sector de ventas en línea. Utiliza React y Material UI para crear una interfaz de usuario moderna y funcional, proporcionando una experiencia de compra fluida y agradable. Incluye características como un carrito de compras, opciones de pago y gestión de productos.',
    date: 'Publicado el 01/01/2023',
    link: 'https://github.com/tuusuario/tienda-ecommerce',
    images: [
      'https://via.placeholder.com/300?text=Image+1', // Reemplaza con las URLs de tus imágenes
      'https://via.placeholder.com/300?text=Image+2',
      'https://via.placeholder.com/300?text=Image+3',
      'https://via.placeholder.com/300?text=Image+4',
      'https://via.placeholder.com/300?text=Image+5',
    ],
  },
  {
    title: 'Asesorías Contables',
    description: 'Este proyecto fue creado para un cliente en el sector de asesorías contables. La aplicación está construida con React y Material UI para ofrecer una interfaz de usuario intuitiva. Incluye características como la gestión de clientes, seguimiento de proyectos contables, y generación de informes financieros.',
    date: 'Publicado el 15/03/2023',
    link: 'https://github.com/tuusuario/asesorias-contables',
    images: [
      'https://via.placeholder.com/300?text=Image+1', // Reemplaza con las URLs de tus imágenes
      'https://via.placeholder.com/300?text=Image+2',
      'https://via.placeholder.com/300?text=Image+3',
      'https://via.placeholder.com/300?text=Image+4',
      'https://via.placeholder.com/300?text=Image+5',
    ],
  },
  {
    title: 'Estadística y Análisis',
    description: 'Desarrollado para un cliente especializado en análisis de datos, este proyecto utiliza React y Material UI para proporcionar una plataforma robusta para la visualización y análisis de datos. Incluye gráficos interactivos, generación de reportes detallados y herramientas para la manipulación de grandes conjuntos de datos.',
    date: 'Publicado el 30/06/2023',
    link: 'https://github.com/tuusuario/estadistica-analisis',
    images: [
      'https://via.placeholder.com/300?text=Image+1', // Reemplaza con las URLs de tus imágenes
      'https://via.placeholder.com/300?text=Image+2',
      'https://via.placeholder.com/300?text=Image+3',
      'https://via.placeholder.com/300?text=Image+4',
      'https://via.placeholder.com/300?text=Image+5',
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
                  <img key={imgIndex} src={image} alt={`Slide ${imgIndex + 1}`} style={{ width: '100%', borderRadius: '8px' }} />
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
