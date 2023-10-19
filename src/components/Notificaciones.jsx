import React, { useEffect } from 'react'
import NotificacionComentario from './NotificacionComentario'
import NotificacionContratacion from './NotificacionContratacion'
import { useNavigate } from 'react-router-dom'
import { sesionIniciada } from '../utils/Utils'
export default function Notificaciones() {

    const goTo = useNavigate()
    useEffect(() => {
        if (!sesionIniciada()) {
            goTo("/")
        }
    }, [])

    return (
        <div className='flex flex-col items-center mx-3'>
            <h2 className='text-5xl pb-4 font-bold text-coral'>Notificaciones</h2>
            <div className='flex flex-col gap-2 items-center'>
                <NotificacionComentario fecha={"26/03/2003"} leido={false}
                    mensaje={"El servicio de inglés está bien, pero esperaba una mejor experiencia y más interacción con los instructores"} calificacion={2} idServicio={1}
                    descripcionServicio={"Mejora tus habilidades en el idioma inglés con mis clases en línea. Trabajaremos en gramática, vocabulario y conversación para que te sientas más seguro y fluido en este idioma tan importante."} />

                <NotificacionComentario fecha={"26/03/2003"} leido={false}
                    mensaje={"El servicio de inglés está bien, pero esperaba una mejor experiencia y más interacción con los instructores"} calificacion={2} idServicio={1}
                    descripcionServicio={"Mejora tus habilidades en el idioma inglés con mis clases en línea. Trabajaremos en gramática, vocabulario y conversación para que te sientas más seguro y fluido en este idioma tan importante."} />

                <NotificacionComentario fecha={"26/03/2003"} leido={false}
                    mensaje={"El servicio de inglés está bien, pero esperaba una mejor experiencia y más interacción con los instructores"} calificacion={2} idServicio={1}
                    descripcionServicio={"Mejora tus habilidades en el idioma inglés con mis clases en línea. Trabajaremos en gramática, vocabulario y conversación para que te sientas más seguro y fluido en este idioma tan importante."} />


                <NotificacionContratacion
                    fecha={"26/03/2003"}
                    mail={"usuario1@example.com"}
                    telefono={1123456789}
                    horario={"Entre 12hs hasta 16hs"}
                    motivo={"Quisiera mejorar mi inglés"}
                    leido={true}
                    idServicio={1}
                    descripcionServicio={"Mejora tus habilidades en el idioma inglés con mis clases en línea. Trabajaremos en gramática, vocabulario y conversación para que te sientas más seguro y fluido en este idioma tan importante."} />


            </div>
        </div>
    )
}
