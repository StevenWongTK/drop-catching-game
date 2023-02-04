import { useCallback, useEffect, useState } from 'react'
import { getRecords } from '../../api/api'
import { ILeaderRecord } from './type'

const useLeaderboard = (isOpened: boolean) => {
    const [records, setRecords] = useState<ILeaderRecord[]>([])

    const fetchRecords = useCallback(async () => {
        const data = await getRecords()
        setRecords(data)
    }, [])

    useEffect(() => {
        fetchRecords()
    }, [fetchRecords, isOpened])

    return { records }
}

export default useLeaderboard
