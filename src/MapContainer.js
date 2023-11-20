import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";

export default function FixedContainer({zip = '10004'}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
         <iframe
          width="100%"
          height="450"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBxMLSZJ_N_UMvfHLWLVdWIr-rHOs-MMmU&q=gas+stations+near+${zip}`}
          allowFullScreen
        ></iframe>
      </Container>
    </React.Fragment>
  );
}
