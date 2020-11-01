const express = require('express');
const server = express();
const port = 3000;

server.listen(3000, () => console.log(`Servidor executando na porta ${port}`));
