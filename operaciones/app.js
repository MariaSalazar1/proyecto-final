'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Carga ficheros rutas
var contact_routes = require('./routes/contact');
// MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas
app.use('/',contact_routes);

// Ruta o metodo de prueba para el API REST
/*app.get('/prueba', function(req,res){

    return res.status(200).send({
        Nombre: "Pagina Q-extreme",
        Descripcion: "Pagina en construccion de Q-extreme",
        Autor: "Desarrollo"
    });
        
   
});*/

// Exportar modulo (fichero actual
module.exports = app;
