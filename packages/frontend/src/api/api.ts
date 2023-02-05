import axios from 'axios'
import { ILeaderRecord } from '../features/leaderboard/type'
const baseURL = 'http://localhost:8000'

export const setRecords = (record: ILeaderRecord) => {
    axios
        .post(`${baseURL}/record/set`, {
            name: record.name,
            score: record.score,
        })
        .catch((err) => {
            console.log(err)
        })
}

export const getRecords = async () => {
    const res = await axios
        .get(`${baseURL}/record/get-top-100`)
        .catch((err) => {
            console.log(err)
        })
    return res?.data as ILeaderRecord[]
}
