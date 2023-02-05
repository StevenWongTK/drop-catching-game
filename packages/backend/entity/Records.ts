import { model, Schema, Document } from 'mongoose'

export interface IRecords {
    name: string
    score: number
}

const RecordsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
})

export default model<IRecords & Document>('record', RecordsSchema)
