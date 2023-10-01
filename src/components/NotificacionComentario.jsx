import React, { useEffect, useState } from 'react'
import { estrellasHtml } from '../utils/Utils'


export default function NotificacionComentario({ fecha, mensaje, calificacion, leido }) {
    const [visto, setVisto] = useState(leido)
    function handleVisto() {
        setVisto(!visto)
    }


    return (
        <div className={`w-full  md:w-7/12 rounded-xl border border-coral ${visto ? "bg-gray-200" : ""}`}>
            <div className='flex flex-col p-2  '>
                <div className='flex justify-between w-full pb-1'>
                    <div className='text-xl font-bold'>Nuevo comentario</div>
                    <div className='text-gray-400'>{fecha}</div>
                </div>
                <div className='flex pb-2'>
                    <div className='flex gap-2 h-4'>{estrellasHtml(calificacion)}</div>
                </div>
                <div className='flex text-lg h-12 overflow-hidden '>
                    {mensaje}
                </div>
                <div className='ml-auto mt-3 flex gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 61 61" fill="none" onClick={handleVisto} lassName='cursor-pointer'>
                        <path d="M37.955 30.9393C37.955 35.0816 34.5973 38.4393 30.455 38.4393C26.313 38.4393 22.9551 35.0816 22.9551 30.9393C22.9551 26.7971 26.313 23.4393 30.455 23.4393C34.5973 23.4393 37.955 26.7971 37.955 30.9393Z" stroke="#A7A7A7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.4552 13.4393C19.261 13.4393 9.78531 20.7965 6.59961 30.9393C9.78526 41.0821 19.261 48.4393 30.4552 48.4393C41.6492 48.4393 51.1249 41.0821 54.3107 30.9393C51.1249 20.7966 41.6492 13.4393 30.4552 13.4393Z" stroke="#A7A7A7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 60 61" className='cursor-pointer' fill="none">
                        <path d="M30 53.9375C42.9442 53.9375 53.4375 43.4442 53.4375 30.5C53.4375 17.5558 42.9442 7.0625 30 7.0625C17.0558 7.0625 6.5625 17.5558 6.5625 30.5C6.5625 43.4442 17.0558 53.9375 30 53.9375Z" stroke="#E04556" strokeWidth="5.625" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.9375 44.5625L45.9375 14.5625" stroke="#E04556" strokeWidth="5.625" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

            </div></div>
    )
}
