import React from 'react'
import { Link } from 'react-router-dom'

export default function Contratacion({ descripcionServicio, mail, telefono, horario, motivo, idServicio }) {
    return (
        <div className='flex flex-col border rounded-lg p-3 w-64'>
            <div class="h-24 overflow-hidden ">
                <span class="font-bold text-xl">Para el servicio:</span>
                <Link to={`/clase/${idServicio}`}>
                    <textarea className='h-full w-full cursor-pointer'>
                        {descripcionServicio}</textarea>
                </Link>

            </div>
            <div className='flex flex-col mt-3'>
                <div className='font-bold text-xl'>Informacion del usuario:</div>
                <div className='flex flex-col'>
                    <div><span className='font-bold'>Motivo:</span> {motivo}</div>
                    <div><span className='font-bold'>Email:</span> {mail}</div>
                    <div><span className='font-bold'>Telefono:</span> {telefono}</div>
                    <div><span className='font-bold'>Horario de referencia:</span> {horario}</div>
                </div>
            </div>
            <button className='rounded border border-coral p-2 text-white  bg-coral transition-all hover:bg-white hover:text-coral mt-2'>Finalizar</button>
        </div>
    )
}
