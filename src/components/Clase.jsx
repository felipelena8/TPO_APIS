import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Clase() {
    let { id } = useParams()
    const [data, setData] = useState({})
    const [cargando, setCargando] = useState(true)

    const getData = () => {
        fetch("/servicios.json").then(response => response.json()).then(json => { json.filter(profesor => profesor.servicios.find(servicio => servicio.id == id) != null) }).then(profesor => console.log(profesor)).finally(setTimeout(() => setCargando(false), 200))
    }

    useEffect(() => { getData() }, [])

    return (
        <div className='flex justify-center'>{cargando ?
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div> :
            <div>
                <div>Hola</div>
            </div>}
        </div>
    )
}
