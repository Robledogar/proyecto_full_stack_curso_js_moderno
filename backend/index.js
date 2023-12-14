import express from "express";
import conectarBD from "./config/db.js";

const app = express();

conectarBD();

app.use('/', ( req, res) => {
    res.send('Hola Mundo');
})

app.listen(4000, () => {
    console.log('Servidor funcionando en el puerto 4000')
});