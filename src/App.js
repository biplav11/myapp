import axios from 'axios'
import React, { useEffect } from 'react'

export default function App() {
    function getQuotes() {
        axios.post('https://v1-review-develop-35700.tocp.usaa.com/v1/pc/umbrella-acquisition/quotes',
            {
                networth: 20000,
                effectiveDate: "2018-08-10"
            }
        ).then(data => console.log(data.data))
    }
    useEffect(() => {
        getQuotes()
    }, [])
    return (
        <div>
            Hello
        </div>
    )
}
