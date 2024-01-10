const dotenv = require('dotenv')

const express = require('express')

const routes = require('./src/routes/routes');


const app = express();

const cors = require('cors');

const connectToDatabase = require('./src/database/connect')

dotenv.config() 

connectToDatabase();

app.use(cors())

app.use(routes);


app.listen(process.env.PORT,()=>{
    console.log('rodando na porta ', process.env.PORT)
});


