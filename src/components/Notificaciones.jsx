import React, { useEffect, useState } from "react";
import NotificacionComentario from "./NotificacionComentario";
import NotificacionContratacion from "./NotificacionContratacion";
import { useNavigate } from "react-router-dom";
import { sesionIniciada } from "../utils/Utils";
import Spinner from "./Spinner";
import { profesorPorId } from "../controllers/app.controller";

export default function Notificaciones() {
  const [notificaciones, setNotificaciones] = useState({});
  let [cargando, setCargando] = useState(true);

  const goTo = useNavigate();

  useEffect(() => {
    if (!sesionIniciada()) {
      goTo("/");
    } else {
      profesorPorId(localStorage.getItem("token"))
        .then((data) => {
          setNotificaciones(data.notificaciones.reverse());
        })
        .then(() => setCargando(false));
    }
  }, []);

  return cargando ? (
    <Spinner />
  ) : (
    <div className="flex flex-col items-center mx-3">
      <h2 className="text-5xl pb-4 font-bold text-coral">Notificaciones</h2>
      <div className="flex flex-col gap-2 items-center">
        {notificaciones.map((notificacion) => {
          if (notificacion.tipo == "Comentario") {
            return (
              <NotificacionComentario
                fecha={notificacion.fecha}
                mensaje={notificacion.mensaje}
                calificacion={notificacion.estrellas}
                leido={notificacion.visto}
                descripcionServicio={notificacion.descripcionServicio}
                idServicio={notificacion.idServicio}
                idNotificacion={notificacion._id}
                key={notificacion._id}
              />
            );
          } else {
            return (
              <NotificacionContratacion
                fecha={notificacion.fecha}
                descripcionServicio={notificacion.descripcionServicio}
                mail={notificacion.mail}
                telefono={notificacion.telefono}
                horario={notificacion.horario}
                motivo={notificacion.motivo}
                idServicio={notificacion.idServicio}
                leido={notificacion.visto}
                idNotificacion={notificacion._id}
                key={notificacion._id}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
