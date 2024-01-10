const express = require('express')

const routes = express.Router()

const menu = require('../controllers/menuController');

const types = require('../controllers/typesController');

routes.use(express.json())

routes.get('/',(req,res)=>{
    try {
        res.status(200).json('Bem vindo ao nosso cardápio!')    
    } catch (error) {
        res.status(500).send(error.message)
    }

})

//route para menu

routes.use(menu)

//route para tipos de pratos

routes.use(types)


module.exports = routes

