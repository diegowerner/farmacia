require('dotenv').config();
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
const mongoose = require('mongoose');


const port = mongoose.connect(process.env.MONGO_URL || 3000)
.then( () => {
    console.log('Conectado no BD');
    app.emit('pronto');
})
.catch (e => console.log(e)); 



const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));

app.use(express.static('./public'));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);
app.use(routes);




// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET  PUT     DELETE

//http://meusite.com/ <- GET '/' > entra nessa página
//http://meusite.com/sobre <- GET '/ajuda' > entra nessa página
//http://meusite.com/contato <- GET '/contato' > entra nessa página


app.on('pronto', () => {
    app.listen(port, () => {
    console.log(`Acessar http://localhost:${port}`);    
    });
});
