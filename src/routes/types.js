const express = require('express');

const routes = express.Router()

const TypeModel = require('../models/type.model');

routes.use(express.json())

routes.get('/types', async (req, res) => {
    try {
        const type = await TypeModel.find({})

        res.status(200).json(type)
        
    } catch (error) {
        console.log(error.message)
    }


})

routes.get('/types/:id', async (req, res) => {
    try {
        const id = req.params.id
        const type = await TypeModel.findById(id)

        res.status(200).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }


})


routes.post('/types', async (req, res) => {
    try {
        const type = await TypeModel.create(req.body)

        res.status(201).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

routes.delete('/types/:id', async (req, res) => {
    try {
        const id = req.params.id

        const type = await TypeModel.findByIdAndDelete(id)

        res.status(200).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }
})


module.exports = routes