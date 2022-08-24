import React from "react";
import "./Newsletter.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Newsletter = () => {
  return (
    <div className="newslatterContainer">
      <h3 className="newsletterStyle">NEWSLETTER</h3>
      <h2 className="textSuscribite">SUSCRIBITE</h2>
      <p className="textEnterate">Y enterate de todas las novedades</p>
      <form action="#" method="get">
            <Box
                sx={{
                width: 500,
                maxWidth: "100%",
                }}
            >
                <TextField fullWidth label="Ingresa tu email" id="Ingresa tu email" type="email"/>
            </Box>
      </form>
    </div>
  );
};

export default Newsletter;
