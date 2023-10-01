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
            <h2 className='text-5xl pb-4 font-bold'>Comentarios</h2>
            <div className='flex flex-col gap-2 items-center'>
                <NotificacionComentario fecha={"26/03/2003"} leido={false} mensaje={"lis ullamcorper molestie, fermentum duis mi facilisi lacus euismod litora."} calificacion={2} />
                <NotificacionComentario fecha={"26/03/2003"} leido={false} mensaje={"Lorem ipsum dolor sit amet consectetur adipiscing elit interdum vivamus, nunc nullam in nec gravida molestie suspendisse nibh, erat taciti aliquet fringilla dapibus natoque pulvinar maecenas. Morbi montes urna tempus tellus nullam lacus porttitor est dapibus condimentum dictumst, a leo at massa purus euismod potenti curabitur risus. Phasellus accumsan nisi congue bibendum lacinia class conubia purus, donec eget luctus ornare porta cursus iaculis ullamcorper molestie, fermentum duis mi facilisi lacus euismod litora."} calificacion={4} />
                <NotificacionComentario fecha={"26/03/2003"} leido={true} mensaje={"Lorem ipsum dolor sit amet consectetur adipiscing elit interdum vivamus, nunc nullam in nec gravida molestie suspendisse nibh, erat taciti aliquet fringilla dapibus natoque pulvinar maecenas. Morbi montes urna tempus tellus nullam lacus porttitor est dapibus condimentum dictumst, a leo at massa purus euismod potenti curabitur risus. Phasellus accumsan nisi congue bibendum lacinia class conubia purus, donec eget luctus ornare porta cursus iaculis ullamcorper molestie, fermentum duis mi facilisi lacus euismod litora."} calificacion={3} />
                <NotificacionContratacion
                    fecha={"26/03/2003"}
                    mail={"usuario1@example.com"}
                    telefono={1123456789}
                    horario={"Entre 12hs hasta 16hs"}
                    motivo={"Quisiera mejorar mi inglés"}
                    idServicio={1} leido={true}
                    descripcionServicio={"Mejora tus habilidades en el idioma inglés con mis clases en línea. Trabajaremos en gramática, vocabulario y conversación para que te sientas más seguro y fluido en este idioma tan importante."} />

            </div>
        </div>
    )
}
