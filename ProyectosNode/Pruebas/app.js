const express = require('express');
const bodyParser = require('body-parser');
const libros = require('./routes/libros');

let app = express();

//middleware ejemplo
app.use((req, res, next) =>{
    console.log(new Date().toString(), ":",req.method, req.url);
    next();
})
//estas dos lineass son importantes
app.use(bodyParser.json());
app.use('/libros', libros);
app.listen(8080);