import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import recordsRouter from './routes/RecordsRouter'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const mongoString = process.env.DATABASE_URL

if (!mongoString) {
    console.error('DATABASE_URL is not defined.')
    throw new Error('DATABASE_URL is not defined.')
}
try {
    mongoose.connect(mongoString)
    console.info(`Connected to MongoDB`)
} catch (err) {
    console.error(`Fail to connect MongoDB`, { mongoString, error: err })
    throw new Error('Fail to connect MongoDB.')
}

const database = mongoose.connection
// handle CORS
app.use(cors())
app.use(bodyParser.json())
app.use('/record', recordsRouter)

// TODO: to be removed
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
