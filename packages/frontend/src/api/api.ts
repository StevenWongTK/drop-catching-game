// import axios from './axios'
import axios from 'axios'

interface IRecord {
    name: string
    score: number
}

const baseURL = 'http://localhost:8000'

export const setRecord = (record: IRecord) => {
    console.log('record:', record)
    axios.post(`${baseURL}/api/record/set`, {
        name: record.name,
        score: record.score,
    })
}
