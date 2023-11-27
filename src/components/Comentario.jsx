import React from "react";
import { formatearFecha, estrellasHtml } from "../utils/Utils";

export default function Comentario({ fecha, mensaje, calificacion }) {
  return (
    <div className="flex flex-col border p-3 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-1 h-3">{estrellasHtml(calificacion)}</div>
        <div className="text-black text-sm">{formatearFecha(fecha)}</div>
      </div>
      <div className="text-lg font-semibold">{mensaje}</div>
    </div>
  );
}
