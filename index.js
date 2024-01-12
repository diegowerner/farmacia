require('dotenv').config();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log(`Conectado no DB: ${conn.connection.host}`);            
        } catch (error) {        
            console.log(error); 
            process.exit(1);
        }
    }




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


connectDB().then(() => {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Conectado na porta ${PORT}`);
    })
})

// app.on('pronto', () => {
//     app.listen(3000, () => {
//     console.log(`Acessar http://localhost:3000/cadastro`);    
//     });
// });
