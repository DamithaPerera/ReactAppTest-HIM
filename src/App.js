import React from 'react';
import { Container, Typography } from '@material-ui/core';
import PropertyList from './features/PropertyList';

function App() {
  return (
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" gutterBottom>
          Property Listings
        </Typography>
        <PropertyList />
      </Container>
  );
}

export default App;