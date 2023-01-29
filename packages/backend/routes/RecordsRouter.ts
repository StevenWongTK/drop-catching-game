import express from 'express'
import RecordModel from '../entity/Records'

const recordsRouter = express.Router()

//Post Method
recordsRouter.post('/set', async (req, res) => {
    const newRecord = new RecordModel({
        name: req.body.name,
        score: req.body.score,
    })
    try {
        const recordToSave = await newRecord.save()
        res.status(200).json(recordToSave)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }

    res.send('Post API')
})

//Get all Method
recordsRouter.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
recordsRouter.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
recordsRouter.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
recordsRouter.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

export default recordsRouter
