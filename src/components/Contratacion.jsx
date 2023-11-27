import React, { useState } from "react";
import { Link } from "react-router-dom";
import { finalizarContratacion } from "../controllers/app.controller";

export default function Contratacion({
  descripcionServicio,
  mail,
  telefono,
  horario,
  motivo,
  idServicio,
  idContratacion,
  getData,
}) {
  const [activo, setActivo] = useState(true);

  const handleFinalizar = () => {
    finalizarContratacion(idContratacion).then(() => getData());
  };
  return (
    <div className="flex flex-col border rounded-lg p-3 w-64">
      <div className="h-24 overflow-hidden ">
        <span className="font-bold text-xl">Para el servicio:</span>
        <Link to={`/clase/${idServicio}`}>
          <textarea
            className="h-full w-full cursor-pointer"
            defaultValue={descripcionServicio}
          />
        </Link>
      </div>
      <div className="flex flex-col mt-3">
        <div className="font-bold text-lg">Informacion del usuario</div>
        <div className="flex flex-col">
          <div>
            <span className="font-bold">Motivo:</span> {motivo}
          </div>
          <div>
            <span className="font-bold">Email:</span> {mail}
          </div>
          <div>
            <span className="font-bold">Telefono:</span> {telefono}
          </div>
          <div>
            <span className="font-bold">Horario de referencia:</span> {horario}
          </div>
        </div>
      </div>
      <button
        className="rounded border  mt-2 p-2 border-coral  text-white  bg-coral transition-all hover:bg-white hover:text-coral"
        onClick={() => handleFinalizar()}
      >
        Finalizar
      </button>
    </div>
  );
}
