import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1e1b4b' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          ✈️ MM-Fly Management
        </Typography>
        <Button color="inherit" variant="outlined" onClick={onOpenModal}>
          + Registrar Vuelo
        </Button>
      </Toolbar>
    </AppBar>
  );
};