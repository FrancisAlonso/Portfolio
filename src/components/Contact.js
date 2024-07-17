import React from 'react';
import { Typography, Box, Paper, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#e8f5e9', // Verde claro
}));

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <Typography variant="h4" gutterBottom align="center" style={{ fontFamily: 'Lobster, cursive' }}>
        Contacto
      </Typography>
      <ContactPaper elevation={3}>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            label="Nombre"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mensaje"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </ContactPaper>
    </ContactContainer>
  );
};

export default Contact;
