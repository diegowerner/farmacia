require('dotenv').config();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');


const routes = require('./routes');

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



const path = require('path');

const requireAuth = require('./src/middlewares/middleware');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(cookieParser());


app.use(express.urlencoded({extended: true}));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



app.use(routes);

app.use(requireAuth);




// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET  PUT     DELETE

//http://meusite.com/ <- GET '/' > entra nessa página
//http://meusite.com/sobre <- GET '/ajuda' > entra nessa página
//http://meusite.com/contato <- GET '/contato' > entra nessa página


connectDB().then(() => {
    app.listen(PORT, "0.0.0.0", function ()  {
        console.log(`Conectado na porta ${PORT}, Acessar http://localhost:3000/`);

    })
})

// app.on('pronto', () => {
//     app.listen(3000, () => {
//     console.log(`Acessar https://estoque-farmacia.cyclic.app/cadastro`);    
//     });
// });
