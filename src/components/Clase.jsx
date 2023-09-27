import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { buscarServicio, calcularEstrellas } from '../utils/Utils'

export default function Clase() {
    let { id } = useParams()
    const [data, setData] = useState({})
    const [cargando, setCargando] = useState(true)


    const getData = () => {
        buscarServicio(id).then(data => setData(data)).then(() => setTimeout(setCargando(false), 300))
    }

    let estrellaLlena = <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
        <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="#FFCB45" />
    </svg>

    let estrellaMitad = <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
        <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="url(#paint0_linear_253_172)" style={{ mixBlendMode: 'multiply' }} />
        <defs>
            <linearGradient id="paint0_linear_253_172" x1="3.23083e-09" y1="14" x2="30" y2="14" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFCB45" />
                <stop offset="0.5" stop-color="#FFCB45" />
                <stop offset="0.5001" stop-color="#D2D0CA" />
            </linearGradient>
        </defs>
    </svg>

    let estrellaVacia = <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
        <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="#D3D0CA" />
    </svg>

    useEffect(() => { getData() }, [])
    return (
        <div className='flex justify-center'>{cargando ?
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div> :
            <div>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <h2>matematica</h2>
                        <div>descripcion del servicio</div>
                        <div className='flex flex-col'>
                            <span className='text-5xl font-bold'>Sobre {data.nombre}</span>
                            <p>Mas de .......</p>
                        </div>
                    </div>
                    <div className='flex flex-col shadow-card p-5 rounded-2xl items-center gap-4'>
                        <img src={data.img} width={230} height={230} alt="" className='rounded-full mx-10' />
                        <span className='text-2xl font-semibold'>{data.nombre} {data.apellido}</span>
                        <div className='flex'>
                            <div className='flex gap-2'> {calcularEstrellas(data.servicio.calificacion).map(elemento => {
                                switch (elemento) {
                                    case 1:
                                        return estrellaLlena
                                    case 0:
                                        return estrellaVacia
                                    case 0.5:
                                        return estrellaMitad
                                }
                            })}</div>
                        </div>
                        <div className='flex flex-col w-full gap-2'>
                            <div className='flex justify-between'>
                                <span>Precio:</span>
                                <span>{data.servicio.costo} / hora</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Ubicacion:</span>
                                <span>{data.ubicacion}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Metodologia:</span>
                                <span>{data.servicio.metodologia}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Tipo de clase:</span>
                                <span>{data.servicio.tipoClase}</span>
                            </div>
                            <div className='flex justify-between'>
                                <span>Frecuencia:</span>
                                <span>{data.servicio.frecuencia}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>}
        </div>
    )
}
