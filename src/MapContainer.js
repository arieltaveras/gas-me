import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import SearchAppBar from './SearchByZip';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
    <iframe
  width="100%"
  height="450"
  frameborder="0" style={{border:0}}
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/search?key=AIzaSyBxMLSZJ_N_UMvfHLWLVdWIr-rHOs-MMmU&q=gas+stations+near+08879"
  allowfullscreen>
    </iframe>
      </Container>
    </React.Fragment>
  );
}