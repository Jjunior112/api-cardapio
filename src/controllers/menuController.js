const express = require('express');

const menu = express.Router();

const menuModel = require('../models/menu.model');

menu.use(express.json());

//get de todos os pratos 

menu.get('/menu', async (req, res) => {
    try {
        const menu = await menuModel.find({})

        res.status(200).json(menu)
    } catch (error) {
        res.status(500).send(error.message)
    }
});

// get de pratos por id

menu.get('/menu/:id', async (req, res) => {
    try {
        const id = req.params.id
        const menu = await menuModel.findById(id)

        res.status(200).json(menu)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

// add novos pratos

menu.post('/menu', async (req, res) => {
    try {
        const menu = await menuModel.create(req.body)

        res.status(201).json(menu)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

// delete de pratos

menu.delete('/menu/:id',async (req,res)=>{
    try {
        const id = req.params.id
        
        const menu = await menuModel.findByIdAndDelete(id)

        res.status(200).json(menu)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = menu;