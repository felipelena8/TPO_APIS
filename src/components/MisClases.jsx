import React, { useEffect, useState } from 'react'
import { profesorPorId } from '../utils/Utils'
import { useNavigate } from 'react-router-dom';
import CardClaseAdmin from './CardClaseAdmin';
import Modal from './Modal';
import Spinner from './Spinner';

export default function MisClases({ props }) {

    let [cargando, setCargando] = useState(true)
    let [profesor, setProfesor] = useState({})
    let [modalCrear, setModalCrear] = useState(false)
    let [modalModificar, setModalModificar] = useState(false)
    let [publicacion, setPublicacion] = useState()
    const goTo = useNavigate();


    const getData = () => {
        profesorPorId(localStorage.getItem("id")).then(data => setProfesor(data)).finally(setTimeout(() => setCargando(false), 400))
    }

    useEffect(() => {
        if (!props.sesionIniciada) {
            goTo("/")
        }
        getData();

    }, [])



    return (
        <>{modalCrear ? <Modal setModal={setModalCrear} /> : ""}
            {modalModificar ? <Modal setModal={setModalModificar} publicacion={publicacion} /> : ""}
            <div className='flex flex-col gap-3'>
                <div className='flex lg:ml-10 max-lg:ml-3 gap-4 items-center flex-col mt-2'>
                    <button className='p-2 bg-verde rounded-xl text-white hover:bg-white hover:text-verde border border-verde transition-all' onClick={() => { setModalCrear(true) }}>Crear nuevo servicio</button>
                </div>
                <div className='flex flex-wrap gap-4 justify-around lg:mx-28'>
                    {cargando ? <Spinner /> : profesor.servicios.map(servicio => <CardClaseAdmin servicio={servicio} nombre={profesor.nombre} ubicacion={profesor.ubicacion} img={profesor.img} key={servicio.id} activo={servicio.activo} setModal={setModalModificar} setPublicacion={setPublicacion} />)}
                </div>
            </div>
        </>
    )
}
