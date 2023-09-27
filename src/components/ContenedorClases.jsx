import React, { useEffect, useState } from 'react'
import CardClase from './CardClase'
import { useParams } from 'react-router-dom'

export default function ContenedorClases() {
  const [data, setData] = useState([])
  const { categoria } = useParams()
  const [cargando, setCargando] = useState(true)

  const getData = () => {
    fetch("/servicios.json").then(response => response.json())
      .then(json => setData(json)).finally(setTimeout(() => setCargando(false), 400))

  }

  useEffect(() => {
    getData();
  }, [])

  //Se filtran las clases de una materia por profesor
  let proveedores = []
  for (let i = 0; i < data.length; i++) {
    let servicios = []
    let proveedor = data[i]
    for (let j = 0; j < proveedor.servicios.length; j++) {
      if (proveedor.servicios[j].categoria.toLowerCase() == categoria.toLowerCase()) {
        servicios.push(proveedor.servicios[j])
      }
    }
    if (servicios.length != 0) {
      proveedor.servicios = servicios
      proveedores.push(proveedor)
    }
  }

  //Se crea la lista de clases que luego se pasaran al componente
  let clases = []
  for (let i = 0; i < proveedores.length; i++) {
    let proveedor = proveedores[i]
    for (let j = 0; j < proveedores[i].servicios.length; j++) {
      let servicio = proveedor.servicios[j]
      proveedor.servicio = servicio;
      clases.push(proveedor)
    }
  }



  return (
    <div className='flex flex-wrap gap-4 justify-around lg:mx-28'>
      {cargando ? <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading...</span>
      </div> : clases.map(clase => <CardClase props={clase} key={clase.servicio.id} />)}
    </div>
  )
}
