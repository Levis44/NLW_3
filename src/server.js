// importar dependencia
const express = require('express');

// iniciando o express
const server = express();

//criar uma rota
server.get('/', () => {
    console.log('oopa')
})


// ligar o servidor
server.listen(5500)