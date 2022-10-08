const express = require('express');
const app = express();

app.use(express.json());
app.use('/', require('./route/productsRoute'));
app.use('/', require('./route/brandsRoute'));
app.use('/', require('./route/categoriesRoute'));
app.use('/', require('./route/variationsRoute'));

app.listen(3000);
console.log("Servidor rodando na porta 3000...")