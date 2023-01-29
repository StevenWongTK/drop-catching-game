import { model, Schema, Document } from 'mongoose'

export interface IRecords {
    // recordId: string
    name: string
    score: number
}

const RecordsSchema = new Schema({
    // recordId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'game_record',
    //     required: true,
    // },
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
