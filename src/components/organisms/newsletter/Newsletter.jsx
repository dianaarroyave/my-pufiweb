import React from "react";
import "./Newsletter.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Newsletter = () => {
  return (
    <div className="newslatterContainer">
      <h2>NEWSLETTER</h2>
      <h1>SUSCRIBITE</h1>
      <p>Y enterate de todas las novedades</p>
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
