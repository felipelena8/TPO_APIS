import React from 'react'
import { formatearFecha, estrellasHtml } from '../utils/Utils'


export default function Comentario({ fecha, mensaje, calificacion, admin }) {
    return (
        <div className='flex flex-col border p-3 rounded-md'>
            <div className='flex justify-between'>
                <div className='flex gap-1 h-3'>{estrellasHtml(calificacion)}</div>
                <div className='text-black text-sm'>{formatearFecha(fecha)}</div>
            </div>
            <div className='text-lg font-semibold'>{mensaje}</div>
            <div className={admin ? "" : "hidden"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 60 61" className='cursor-pointer' fill="none">
                    <path d="M30 53.9375C42.9442 53.9375 53.4375 43.4442 53.4375 30.5C53.4375 17.5558 42.9442 7.0625 30 7.0625C17.0558 7.0625 6.5625 17.5558 6.5625 30.5C6.5625 43.4442 17.0558 53.9375 30 53.9375Z" stroke="#E04556" strokeWidth="5.625" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.9375 44.5625L45.9375 14.5625" stroke="#E04556" strokeWidth="5.625" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}
