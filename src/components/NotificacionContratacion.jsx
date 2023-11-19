import React, { useState } from "react";
import { Link } from "react-router-dom";
import { changeSeenNotification } from "../controllers/app.controller";

export default function NotificacionContratacion({
  idNotificacion,
  fecha,
  descripcionServicio,
  mail,
  telefono,
  horario,
  motivo,
  idServicio,
  leido,
}) {
  const [visto, setVisto] = useState(leido);
  const [estado, setEstado] = useState("Pendiente");
  function handleVisto() {
    setVisto(!visto);
    changeSeenNotification(idNotificacion);
  }

  function handleAceptar() {
    setEstado("Aceptado");
  }

  function handleCancelar() {
    setEstado("Cancelado");
  }

  return (
    <div
      className={`w-full  md:w-7/12 rounded-xl border border-coral ${
        visto ? "bg-gray-200" : ""
      }`}
    >
      <div className="flex flex-col p-2  ">
        <div className="flex justify-between w-full pb-1">
          <div className="text-xl font-bold">Nuevo contacto</div>
          <div className="text-gray-400">{fecha}</div>
        </div>
        <div className="h-12 overflow-hidden ">
          <span className="font-bold">Para el servicio:</span>
          <Link to={`/clase/${idServicio}`}>{" " + descripcionServicio}</Link>
        </div>
        <div className="flex flex-col mt-3">
          <div className="font-bold text-xl">Informacion del usuario:</div>
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
              <span className="font-bold">Horario de referencia:</span>{" "}
              {horario}
            </div>
          </div>
        </div>
        <div className="flex">
          <span
            className={
              `font-bold mt-auto p-1 rounded  ` +
              (estado == "Pendiente"
                ? "text-cyan-400 bg-cyan-100"
                : estado == "Aceptado"
                ? "text-green-600 bg-green-300"
                : "text-red-600 bg-red-400")
            }
          >
            {estado}
          </span>
          <div className="ml-auto mt-3 flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 61 61"
              fill="none"
              onClick={handleVisto}
              className="cursor-pointer"
            >
              <path
                d="M37.955 30.9393C37.955 35.0816 34.5973 38.4393 30.455 38.4393C26.313 38.4393 22.9551 35.0816 22.9551 30.9393C22.9551 26.7971 26.313 23.4393 30.455 23.4393C34.5973 23.4393 37.955 26.7971 37.955 30.9393Z"
                stroke="#A7A7A7"
                strokeWidth="5"
                strokeLinejoin="round"
              />
              <path
                d="M30.4552 13.4393C19.261 13.4393 9.78531 20.7965 6.59961 30.9393C9.78526 41.0821 19.261 48.4393 30.4552 48.4393C41.6492 48.4393 51.1249 41.0821 54.3107 30.9393C51.1249 20.7966 41.6492 13.4393 30.4552 13.4393Z"
                stroke="#A7A7A7"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 60 61"
              fill="none"
              className="cursor-pointer"
              onClick={handleAceptar}
            >
              <g clipPath="url(#clip0_301_444)">
                <path
                  d="M57.4321 2.79166C56.8813 2.43422 56.2656 2.18878 55.6199 2.06938C54.9743 1.94997 54.3115 1.95893 53.6693 2.09575C53.0272 2.23257 52.4183 2.49457 51.8774 2.86677C51.3365 3.23898 50.8743 3.7141 50.5171 4.26499L22.5004 47.45L8.83707 34.8167C8.35501 34.3709 7.78988 34.0245 7.17394 33.7972C6.558 33.5699 5.90331 33.4661 5.24727 33.4918C3.92232 33.5437 2.67226 34.1198 1.77207 35.0933C0.87188 36.0669 0.395307 37.3582 0.447193 38.6831C0.499078 40.0081 1.07517 41.2581 2.04874 42.1583L19.9887 58.745C19.9887 58.745 20.5037 59.1883 20.7421 59.3433C21.2929 59.701 21.9088 59.9467 22.5546 60.0662C23.2004 60.1858 23.8634 60.1769 24.5057 60.04C25.1481 59.9032 25.7572 59.6411 26.2982 59.2688C26.8392 58.8964 27.3015 58.4211 27.6587 57.87L58.9054 9.70666C59.2628 9.15592 59.5083 8.54015 59.6277 7.89453C59.7471 7.24891 59.7381 6.58609 59.6013 5.94393C59.4645 5.30178 59.2025 4.69287 58.8303 4.15199C58.4581 3.61112 57.983 3.14887 57.4321 2.79166Z"
                  fill="#22D513"
                />
              </g>
              <defs>
                <strokeWidth id="clip0_301_444">
                  <rect
                    width="60"
                    height="60"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </strokeWidth>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 60 61"
              className="cursor-pointer"
              fill="none"
              onClick={handleCancelar}
            >
              <path
                d="M30 53.9375C42.9442 53.9375 53.4375 43.4442 53.4375 30.5C53.4375 17.5558 42.9442 7.0625 30 7.0625C17.0558 7.0625 6.5625 17.5558 6.5625 30.5C6.5625 43.4442 17.0558 53.9375 30 53.9375Z"
                stroke="#E04556"
                strokeWidth="5.625"
              />
              <path
                d="M15.9375 44.5625L45.9375 14.5625"
                stroke="#E04556"
                strokeWidth="5.625"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
