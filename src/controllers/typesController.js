const express = require('express');

const types = express.Router()

const TypeModel = require('../models/type.model');

types.use(express.json())

types.get('/types', async (req, res) => {
    try {
        const type = await TypeModel.find({})

        res.status(200).json(type)
        
    } catch (error) {
        console.log(error.message)
    }


})

types.get('/types/:id', async (req, res) => {
    try {
        const id = req.params.id
        const type = await TypeModel.findById(id)

        res.status(200).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }


})


types.post('/types', async (req, res) => {
    try {
        const type = await TypeModel.create(req.body)

        res.status(201).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }
})

types.delete('/types/:id', async (req, res) => {
    try {
        const id = req.params.id

        const type = await TypeModel.findByIdAndDelete(id)

        res.status(200).json(type)

    } catch (error) {
        res.status(500).send(error.message)
    }
})


module.exports = types