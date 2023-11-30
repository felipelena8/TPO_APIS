import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardClaseAdmin from "./CardClaseAdmin";
import Modal from "./Modal";
import Spinner from "./Spinner";
import { profesorPorId } from "../controllers/app.controller";

export default function MisClases({ props }) {
  let [cargando, setCargando] = useState(true);
  let [profesor, setProfesor] = useState({});
  let [modalCrear, setModalCrear] = useState(false);
  let [modalModificar, setModalModificar] = useState(false);
  let [publicacion, setPublicacion] = useState();
  let [servicioId, setServicioId] = useState();
  const goTo = useNavigate();

  function getData() {
    profesorPorId(localStorage.getItem("token")).then((data) => {
      setProfesor(data);
      setCargando(Object.keys(data) == 0);
    });
  }

  useEffect(() => {
    if (!props.sesionIniciada) {
      goTo("/");
    }
    getData();
    setCargando(Object.keys(profesor) == 0);
  }, []);

  return (
    <>
      {modalCrear ? (
        <Modal
          setModal={setModalCrear}
          getData={getData}
          tipoModal={"create"}
        />
      ) : (
        ""
      )}
      {modalModificar ? (
        <Modal
          setModal={setModalModificar}
          getData={getData}
          tipoModal={"update"}
          publicacion={publicacion}
          servicioId={servicioId}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col gap-3">
        <div className="flex lg:ml-10 max-lg:ml-3 gap-4 items-center flex-col mt-2">
          <button
            className="p-2 bg-verde rounded-xl text-white hover:bg-white hover:text-verde border border-verde transition-all"
            onClick={() => {
              setModalCrear(true);
            }}
          >
            Crear nuevo servicio
          </button>
        </div>
        <div className="flex flex-wrap gap-4 justify-around lg:mx-28">
          {cargando ? (
            <Spinner />
          ) : (
            profesor.servicios.map((servicio) => (
              <CardClaseAdmin
                key={servicio._id}
                servicio={servicio}
                nombre={profesor.nombre}
                ubicacion={profesor.ubicacion}
                img={profesor.img}
                activo={servicio.activo}
                setModal={setModalModificar}
                setPublicacion={setPublicacion}
                getData={getData}
                setServicioId={setServicioId}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
