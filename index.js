const dotenv = require('dotenv')

const express = require('express')

const menu = require('./src/routes/menu');

const types = require('./src/routes/types');

const app = express();


const cors = require('cors');

const connectToDatabase = require('./src/database/connect')

dotenv.config() 

connectToDatabase();

app.use(cors())

app.use(menu);

app.use(types);

app.listen(process.env.PORT,()=>{
    console.log('rodando na porta ', process.env.PORT)
});


