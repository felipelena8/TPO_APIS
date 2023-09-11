import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Clase() {
    let { id } = useParams()
    const [data, setData] = useState({})
    const [cargando, setCargando] = useState(true)

    const getData = () => {
        fetch("/servicios.json").then(response => response.json()).then(json => json.find(element => element.id == id)).then(json => setData(json)).finally(setTimeout(() => setCargando(false), 400))
    }

    useEffect(() => { getData() }, [])

    return (
        <div>{cargando ?
            <div class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div> :
            <div>
                
            </div>}
        </div>
    )
}
