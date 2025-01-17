import { useState, useEffect } from 'react'
import { fetchData } from '../../utils/fetchData'

export default function useData(url) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetchData(url)
            .then(data => setData(data))
    }, [url])

    return {
        data
    }
}
