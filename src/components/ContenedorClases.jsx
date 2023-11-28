import React, { useEffect, useState } from "react";
import CardClase from "./CardClase";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { estrellasHtml, filtrarServicios } from "../utils/Utils";
import { serviciosPorCategoria } from "../controllers/app.controller";

export default function ContenedorClases() {
  const [servicios, setServicios] = useState([]);
  const { categoria } = useParams();
  const [cargando, setCargando] = useState(true);
  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const [opcionSeleccionadaFrecuencia, setOpcionSeleccionadaFrecuencia] =
    useState(queryParams.get("frecuencia") || "Todas");
  const [opcionSeleccionadaTipo, setOpcionSeleccionadaTipo] = useState(
    queryParams.get("clase") || "Todas"
  );

  const [calificacionesSeleccionadas, setCalificacionesSeleccionadas] =
    useState(() => {
      let calificacionesQuery = queryParams.get("calificacion");
      if (calificacionesQuery != null) {
        calificacionesQuery = calificacionesQuery.split(",");
        return [false, false, false, false, false].map((elem, i) =>
          calificacionesQuery.includes(i.toString()) ? true : false
        );
      } else {
        return [false, false, false, false, false];
      }
    });

  const getData = () => {
    serviciosPorCategoria(categoria)
      .then((data) => {
        if (data == false) return [];
        filtrarServicios(
          data,
          opcionSeleccionadaTipo,
          opcionSeleccionadaFrecuencia,
          calificacionesSeleccionadas
        );
        return data;
      })
      .then((servicios) => setServicios(servicios))
      .finally(setTimeout(() => setCargando(false), 400));
  };

  useEffect(() => {
    getData();
  }, [
    calificacionesSeleccionadas,
    opcionSeleccionadaFrecuencia,
    opcionSeleccionadaTipo,
  ]);

  const handleFrecuenciaChange = (e) => {
    const nuevaOpcion = e.target.value;
    // Actualizamos el estado con la nueva opción seleccionada
    setOpcionSeleccionadaFrecuencia(nuevaOpcion);
    // Actualizamos la URL con el nuevo valor de "opcion" como parámetro de consulta
    const nuevoQueryParams = new URLSearchParams(location.search);
    if (nuevaOpcion == "Todas") {
      nuevoQueryParams.delete("frecuencia");
    } else {
      nuevoQueryParams.set("frecuencia", nuevaOpcion);
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
      nuevoQueryParams.delete("clase");
    } else {
      nuevoQueryParams.set("clase", nuevaOpcion);
    }
    // Reemplazamos la URL actual en el historial de navegación
    navigate({ search: nuevoQueryParams.toString() });
  };

  const handleCalificacion = (e) => {
    setCalificacionesSeleccionadas(
      calificacionesSeleccionadas.map((elem, i) => {
        if (i == e.currentTarget.value) {
          return !elem;
        } else {
          return elem;
        }
      })
    );
  };

  useEffect(() => {
    const nuevoQueryParams = new URLSearchParams(location.search);
    if (calificacionesSeleccionadas.includes(true)) {
      nuevoQueryParams.set(
        "calificacion",
        calificacionesSeleccionadas
          .map((elem, i) => (elem ? i + "," : ""))
          .join("")
          .slice(0, -1)
      );
      navigate({ search: nuevoQueryParams.toString() });
    } else {
      nuevoQueryParams.delete("calificacion");
      navigate({ search: nuevoQueryParams.toString() });
    }
  }, [calificacionesSeleccionadas]);

  const filtro = (
    <>
      <select
        className="border p-2 rounded-full w-36"
        onChange={handleTipoClaseChange}
        defaultValue={opcionSeleccionadaTipo}
      >
        <option value="Todas" className="p-2 rounded-full">
          Tipo de clase
        </option>
        <option value="Grupal" className="p-2 rounded-full">
          Grupal
        </option>
        <option value="Individual" className="p-2 rounded-full">
          Individual
        </option>
      </select>
      <select
        className="border p-2 rounded-full w-36"
        onChange={handleFrecuenciaChange}
        defaultValue={opcionSeleccionadaFrecuencia}
      >
        <option value="Todas" className="p-2 rounded-full">
          Frecuencia
        </option>
        <option value="Unica" className="p-2 rounded-full">
          Única
        </option>
        <option value="Semanal" className="p-2 rounded-full">
          Semanal
        </option>
        <option value="Mensual" className="p-2 rounded-full">
          Mensual
        </option>
      </select>
      <button
        className={
          "flex rounded-full border p-2 w-36 h-10" +
          (calificacionesSeleccionadas[0] ? " bg-slate-200" : "")
        }
        value={0}
        onClick={(e) => {
          handleCalificacion(e);
        }}
      >
        {estrellasHtml(1)}
      </button>
      <button
        className={
          "flex rounded-full border p-2 w-36 h-10" +
          (calificacionesSeleccionadas[1] ? " bg-slate-200" : "")
        }
        value={1}
        onClick={(e) => {
          handleCalificacion(e);
        }}
      >
        {estrellasHtml(2)}
      </button>
      <button
        className={
          "flex rounded-full border p-2 w-36 h-10" +
          (calificacionesSeleccionadas[2] ? " bg-slate-200" : "")
        }
        value={2}
        onClick={(e) => {
          handleCalificacion(e);
        }}
      >
        {estrellasHtml(3)}
      </button>
      <button
        className={
          "flex rounded-full border p-2 w-36 h-10" +
          (calificacionesSeleccionadas[3] ? " bg-slate-200" : "")
        }
        value={3}
        onClick={(e) => {
          handleCalificacion(e);
        }}
      >
        {estrellasHtml(4)}
      </button>
      <button
        className={
          "flex rounded-full border p-2 w-36 h-10" +
          (calificacionesSeleccionadas[4] ? " bg-slate-200" : "")
        }
        value={4}
        onClick={(e) => {
          handleCalificacion(e);
        }}
      >
        {estrellasHtml(5)}
      </button>
    </>
  );

  let serviciosHtml = servicios.map((profesor) =>
    profesor.servicios.map((servicio) => (
      <CardClase
        servicio={servicio}
        nombre={profesor.nombre}
        ubicacion={profesor.ubicacion}
        img={profesor.img}
        key={servicio.id}
      />
    ))
  );

  return (
    <div className="flex flex-col">
      <button
        className={`mx-10 my-3 flex align-middle gap-2 border p-2 rounded-full w-min sm:hidden ${
          mostrarFiltro ? "bg-slate-200" : ""
        }`}
        onClick={() => {
          setMostrarFiltro(!mostrarFiltro);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 60 60"
          fill="none"
        >
          <g clipPath="url(#clip0_293_166)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 18.5714C30 17.5629 30.216 15.7143 30.552 15.7143H0V21.4286H30.552C30.216 21.4286 30 19.58 30 18.5714ZM53.448 15.7143C52.209 12.8571 48.912 10 45 10C40.029 10 36 13.8371 36 18.5714C36 23.3057 40.029 27.1429 45 27.1429C48.912 27.1429 52.209 24.2857 53.448 21.4286H60V15.7143H53.448ZM30 41.4286C30 42.4371 29.784 43.3886 29.448 44.2857H60V38.5714H29.448C29.784 38.5714 30 40.42 30 41.4286ZM24 41.4286C24 46.1629 19.971 50 15 50C11.088 50 7.791 47.1429 6.552 44.2857H0V38.5714H6.552C7.791 35.7143 11.088 32.8571 15 32.8571C19.971 32.8571 24 36.6943 24 41.4286Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_293_166">
              <rect width="60" height="60" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>Filtros</span>
      </button>

      <div className="flex gap-3">
        {mostrarFiltro ? (
          <div className="flex gap-4 items-center flex-col sm:ml-10 max-sm:w-full sm:hidden">
            {filtro}
          </div>
        ) : (
          <div className="flex flex-col gap-4 self-center items-center  sm:hidden mx-auto">
            {serviciosHtml}
          </div>
        )}
        <div className="flex gap-4 flex-col  sm:mx-10 max-sm:hidden">
          {filtro}
        </div>

        <div className="flex flex-wrap gap-4 self-center items-center  max-sm:hidden">
          {cargando ? (
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          ) : (
            serviciosHtml
          )}
        </div>
      </div>
    </div>
  );
}
