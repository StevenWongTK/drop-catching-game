import express, { Request, Response } from 'express'
import RecordModel from '../entity/Records'

const recordsRouter = express.Router()

recordsRouter.post('/set', async (req: Request, res: Response) => {
    const newRecord = new RecordModel({
        name: req.body.name,
        score: req.body.score,
    })
    try {
        await newRecord.save()
        res.status(200)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
})

recordsRouter.get('/get-top-100', async (req: Request, res: Response) => {
    try {
        const data = await RecordModel.find({}, { name: 1, score: 1 })
            .sort({ score: -1 })
            .limit(100)
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
})

export default recordsRouter
