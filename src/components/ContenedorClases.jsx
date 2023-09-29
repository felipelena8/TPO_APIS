import React, { useEffect, useState } from 'react'
import CardClase from './CardClase'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { estrellasHtml, filtrarServicios, serviciosPorCategoria } from '../utils/Utils'

export default function ContenedorClases() {
  const [servicios, setServicios] = useState([])
  const { categoria } = useParams()
  const [cargando, setCargando] = useState(true)


  const navigate = useNavigate()
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const [opcionSeleccionadaFrecuencia, setOpcionSeleccionadaFrecuencia] = useState(queryParams.get('frecuencia') || "Todas");
  const [opcionSeleccionadaTipo, setOpcionSeleccionadaTipo] = useState(queryParams.get('clase') || "Todas");

  const [calificacionesSeleccionadas, setCalificacionesSeleccionadas] = useState(() => {
    let calificacionesQuery = queryParams.get('calificacion'); if (calificacionesQuery != null) {
      calificacionesQuery = calificacionesQuery.split(",");
      ; return [false, false, false, false, false].map((elem, i) => calificacionesQuery.includes(i.toString()) ? true : false)
    } else { return [false, false, false, false, false] }
  })

  const getData = () => {
    serviciosPorCategoria(categoria).then(data => { filtrarServicios(data, opcionSeleccionadaTipo, opcionSeleccionadaFrecuencia, calificacionesSeleccionadas); return data }).then(servicios => setServicios(servicios)).finally(setTimeout(() => setCargando(false), 400))
  }

  useEffect(() => {
    getData();
  }, [calificacionesSeleccionadas, opcionSeleccionadaFrecuencia, opcionSeleccionadaTipo])

  const handleFrecuenciaChange = (e) => {
    const nuevaOpcion = e.target.value;
    // Actualizamos el estado con la nueva opción seleccionada
    setOpcionSeleccionadaFrecuencia(nuevaOpcion);
    // Actualizamos la URL con el nuevo valor de "opcion" como parámetro de consulta
    const nuevoQueryParams = new URLSearchParams(location.search);
    if (nuevaOpcion == "Todas") {
      nuevoQueryParams.delete('frecuencia')
    } else {
      nuevoQueryParams.set('frecuencia', nuevaOpcion);
    }
    // Reemplazamos la URL actual en el historial de navegación
    navigate({ search: nuevoQueryParams.toString() });
  };

  const handleTipoClaseChange = (e) => {
    const nuevaOpcion = e.target.value;
    // Actualizamos el estado con la nueva opción seleccionada
    setOpcionSeleccionadaTipo(nuevaOpcion);
    // Actualizamos la URL con el nuevo valor de "opcion" como parámetro de consulta
    const nuevoQueryParams = new URLSearchParams(location.search);
    if (nuevaOpcion == "Todas") {
      nuevoQueryParams.delete('clase')
    } else {
      nuevoQueryParams.set('clase', nuevaOpcion);
    }
    // Reemplazamos la URL actual en el historial de navegación
    navigate({ search: nuevoQueryParams.toString() });
  };


  const handleCalificacion = (e) => {
    setCalificacionesSeleccionadas(calificacionesSeleccionadas.map((elem, i) => {
      if (i == e.currentTarget.value) {
        return !elem
      } else {
        return elem
      }
    }))
  }

  useEffect(() => {
    const nuevoQueryParams = new URLSearchParams(location.search);
    if (calificacionesSeleccionadas.includes(true)) {
      nuevoQueryParams.set('calificacion', calificacionesSeleccionadas.map((elem, i) => (elem ? i + "," : "")).join("").slice(0, -1))
      navigate({ search: nuevoQueryParams.toString() })
    } else {

      nuevoQueryParams.delete('calificacion')
      navigate({ search: nuevoQueryParams.toString() })
    }
  }, [calificacionesSeleccionadas]);

  return (
    <div className='flex gap-3'>
      <div className='flex ml-10 gap-4 items-center flex-col'>
        <select className='border p-2 rounded-full w-36' onChange={handleTipoClaseChange} defaultValue={opcionSeleccionadaTipo}>
          <option value="Todas" className='p-2 rounded-full'>Tipo de clase</option>
          <option value="Grupal" className='p-2 rounded-full'>Grupal</option>
          <option value="Individual" className='p-2 rounded-full'>Individual</option>
        </select>
        <select className='border p-2 rounded-full w-36' onChange={handleFrecuenciaChange} defaultValue={opcionSeleccionadaFrecuencia}>
          <option value="Todas" className='p-2 rounded-full'>Frecuencia</option>
          <option value="Unica" className='p-2 rounded-full'>Única</option>
          <option value="Semanal" className='p-2 rounded-full'>Semanal</option>
          <option value="Mensual" className='p-2 rounded-full'>Mensual</option>
        </select>
        <button className={'flex rounded-full border p-2 w-36 h-10' + (calificacionesSeleccionadas[0] ? " bg-slate-200" : "")} value={0} onClick={(e) => { handleCalificacion(e) }}>{estrellasHtml(1)}</button>
        <button className={'flex rounded-full border p-2 w-36 h-10' + (calificacionesSeleccionadas[1] ? " bg-slate-200" : "")} value={1} onClick={(e) => { handleCalificacion(e) }}>{estrellasHtml(2)}</button>
        <button className={'flex rounded-full border p-2 w-36 h-10' + (calificacionesSeleccionadas[2] ? " bg-slate-200" : "")} value={2} onClick={(e) => { handleCalificacion(e) }}>{estrellasHtml(3)}</button>
        <button className={'flex rounded-full border p-2 w-36 h-10' + (calificacionesSeleccionadas[3] ? " bg-slate-200" : "")} value={3} onClick={(e) => { handleCalificacion(e) }}>{estrellasHtml(4)}</button>
        <button className={'flex rounded-full border p-2 w-36 h-10' + (calificacionesSeleccionadas[4] ? " bg-slate-200" : "")} value={4} onClick={(e) => { handleCalificacion(e) }}>{estrellasHtml(5)}</button>
      </div>
      <div className='flex flex-wrap gap-4 justify-around lg:mx-28'>
        {cargando ? <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span>
        </div> : servicios
          .map(profesor =>
            profesor.servicios.map(servicio => <CardClase servicio={servicio} nombre={profesor.nombre} ubicacion={profesor.ubicacion} img={profesor.img} key={servicio.id} />))}
      </div>
    </div>
  )
}
