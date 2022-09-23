const express = require('express');
const app= express();

app.listen(3000, ()=> console.log('Levantando un servidor con Express'));

app.get('/', function(req, res) {
    res.send('Bienvenidos al sitio');
});