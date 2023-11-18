const express = require('express');

const routes = express.Router();

const menuModel = require('../models/menu.model');

routes.use(express.json());


//get de todos os pratos 

routes.get('/menu', async (req, res) => {
    try {
        const menu = await menuModel.find({})

        res.status(200).json(menu)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

// get de pratos por id

routes.get('/menu/:id', async (req, res) => {
    try {
        const id = req.params.id
        const menu = await menuModel.findById(id)

        res.status(200).json(menu)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

// add novos pratos

routes.post('/menu', async (req, res) => {
    try {
        const menu = await menuModel.create(req.body)

        res.status(201).json(menu)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// delete de pratos

routes.delete('/menu/:id',async (req,res)=>{
    try {
        const id = req.params.id
        
        const menu = await menuModel.findByIdAndDelete(id)

        res.status(200).json(menu)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = routes;


