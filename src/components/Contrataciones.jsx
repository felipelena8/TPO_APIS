import React, { useEffect, useState } from "react";
import { getContratacionesProfesor } from "../utils/Utils";
import Contratacion from "./Contratacion";
import { profesorPorId } from "../controllers/app.controller";
import Spinner from "./Spinner";

export default function Contrataciones() {
  const [cargando, setCargando] = useState(true);
  const [contrataciones, setContrataciones] = useState([]);
  const getData = () => {
    profesorPorId(localStorage.getItem("token"))
      .then((data) => {
        setContrataciones(getContratacionesProfesor(data));
      })
      .then(() => setCargando(false));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="flex flex-col items-center gap-6">
      {cargando ? (
        <Spinner />
      ) : (
        <div className="flex flex-col mx-3">
          <h2 className="text-4xl font-bold text-center mb-3 text-coral">
            Contrataciones activas
          </h2>
          <div className="flex flex-wrap gap-4  justify-center">
            {contrataciones.map((contratacion) => (
              <Contratacion
                mail={contratacion.mail}
                telefono={contratacion.telefono}
                horario={contratacion.horario}
                motivo={contratacion.motivo}
                idServicio={contratacion.idServicio}
                descripcionServicio={contratacion.descripcionServicio}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
