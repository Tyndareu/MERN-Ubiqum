import { useEffect, useState } from 'react'

export const Cities = () => {
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/all')
            .then(res => res.json())
            .then(data => {
                setCities(data)
            })
    }, [])

    console.log(cities)

    return (
        <h1>Cities</h1>
    )
}