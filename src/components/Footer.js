import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FooterContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#a5d6a7',
  padding: theme.spacing(2),
  textAlign: 'center',
  position: 'relative', // Asegura que el footer esté al final del contenedor
  bottom: 0, // Posiciona el footer al final
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} Francis Alonso. Todos los derechos reservados.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
