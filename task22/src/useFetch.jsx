import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        // console.log('Fetching data from', url)
        fetch(url)
            .then(response => {
                // console.log('Response received:', response)
                return response.json()
            })
            .then(data => {
                // console.log('Data received:', data)
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                // console.error('Error fetching data:', error)
                setError(error)
                setLoading(false)
            })
    }, [url])
    return { data, error, loading }
}

export default useFetch