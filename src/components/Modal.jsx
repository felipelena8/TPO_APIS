import React, { useEffect, useState } from "react";
import { getCategorias } from "../utils/Utils";
import { createClass } from "../controllers/app.controller";

export default function Modal({ setModal, publicacion }) {
  const [categorias, setCategorias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [values, setValues] = useState({
    duracion: publicacion?.duracion || "",
    costo: publicacion?.costo || "",
    descripcion: publicacion?.descripcion || "",
  });
  const [tipo, setTipo] = useState(publicacion?.tipoClase || "");
  const [frecuencia, setFrecuencia] = useState(publicacion?.frecuencia || "");
  const [metodologia, setMetodologia] = useState(
    publicacion?.metodologia || ""
  );
  const [categoria, setCategoria] = useState(publicacion?.categoria || "");

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      values.duracion &&
      values.costo &&
      values.descripcion &&
      frecuencia &&
      metodologia &&
      categoria &&
      tipo &&
      !isNaN(values.duracion) &&
      !isNaN(values.costo)
    ) {
      const clase = {
        categoria,
        tipo,
        frecuencia,
        metodologia,
        costo: values.costo,
        duracion: values.duracion,
        descripcion: values.descripcion,
      };
      createClass(clase);
      alert(publicacion ? "Publicacion modificada" : "Publicacion creada");
      setSubmitted(false);
      setModal(false);
    }
  };

  const handleCategoriaChange = (e) => {
    setCategoria(e.target.value);
  };

  const handleTipoChange = (e) => {
    setTipo(e.target.value);
  };

  const handleFrecuenciaChange = (e) => {
    setFrecuencia(e.target.value);
  };

  const handleMetodologiaChange = (e) => {
    setMetodologia(e.target.value);
  };

  useEffect(() => {
    getCategorias()
      .then((categorias) => setCategorias(categorias))
      .then(setCargando(false));
  }, []);
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-full  py-20 bg-black bg-opacity-80 flex justify-center items-center ">
      <div className="flex flex-col bg-white rounded-3xl text-center items-center p-7 my-10 gap-3 relative h-full  overflow-y-scroll">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 61 61"
          fill="none"
          className="cursor-pointer absolute right-3 top-3"
          onClick={() => setModal(false)}
        >
          <g clipPath="url(#clip0_269_188)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M41.1049 38.9148C41.838 39.6461 41.838 40.8462 41.1049 41.5774C40.3736 42.3087 39.1849 42.3087 38.4518 41.5774L30.5093 33.6274L22.5105 41.6335C21.7718 42.3647 20.5756 42.3647 19.8368 41.6335C19.1 40.8835 19.1 39.6836 19.8368 38.9524L27.8356 30.9461L19.893 23.0149C19.1599 22.2836 19.1599 21.0835 19.893 20.3523C20.6224 19.621 21.8112 19.621 22.5443 20.3523L30.4868 28.3023L38.5455 20.2399C39.2843 19.5086 40.4786 19.5086 41.2174 20.2399C41.9543 20.9899 41.9543 22.171 41.2174 22.921L33.1605 30.9836L41.1049 38.9148ZM30.498 0.964844C13.9287 0.964844 0.498047 14.3898 0.498047 30.9648C0.498047 47.5398 13.9287 60.9648 30.498 60.9648C47.0674 60.9648 60.498 47.5398 60.498 30.9648C60.498 14.3898 47.0674 0.964844 30.498 0.964844Z"
              fill="#E04556"
            />
          </g>
          <defs>
            <clipPath id="clip0_269_188">
              <rect
                width="60"
                height="60"
                fill="white"
                transform="translate(0.498047 0.964844)"
              />
            </clipPath>
          </defs>
        </svg>
        <span className="font-bold text-3xl">
          {publicacion ? "Modificar publicacion" : "Crear publicación"}
        </span>
        <form className="flex flex-col mt-10 gap-3  h-full">
          <div className="flex flex-col">
            {cargando ? (
              ""
            ) : (
              <select
                name="categoria"
                className={`bg-slate-300  placeholder-slate-500 rounded h-12 w-full pl-2 ${
                  submitted && categoria == ""
                    ? "border-red-600 border-l-2"
                    : ""
                }`}
                value={categoria}
                onChange={handleCategoriaChange}
              >
                <option value="" className="p-2 rounded-full text-slate-500">
                  Categoría
                </option>
                {categorias.map((categoria, i) => (
                  <option
                    value={categoria}
                    key={i}
                    className="p-2 rounded-full"
                  >
                    {categoria}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <input
              type="number"
              name="duracion"
              placeholder="Duracion en horas"
              className={`bg-slate-300  placeholder-slate-500 rounded h-12 w-full pl-2 ${
                submitted && values.duracion == ""
                  ? "border-red-600 border-l-2"
                  : ""
              }`}
              value={values.duracion}
              onChange={handleInputChange}
            />
            <input
              type="number"
              name="costo"
              placeholder="Costo"
              className={`bg-slate-300  placeholder-slate-500 rounded h-12 w-full pl-2 ${
                submitted && values.costo == ""
                  ? "border-red-600 border-l-2"
                  : ""
              }`}
              value={values.costo}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex gap-3 max-md:flex-col">
            <select
              className={`bg-slate-300  placeholder-slate-500 rounded h-12 w-full pl-2 ${
                submitted && tipo == "" ? "border-red-600 border-l-2" : ""
              }`}
              defaultValue={tipo}
              onClick={handleTipoChange}
            >
              <option value="" className="p-2 rounded-full text-slate-500">
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
              className={`bg-slate-300  placeholder-slate-500 rounded h-12 w-full pl-2 ${
                submitted && frecuencia == "" ? "border-red-600 border-l-2" : ""
              }`}
              onChange={handleFrecuenciaChange}
              defaultValue={frecuencia}
            >
              <option value="" className="p-2 rounded-full text-slate-500">
                Frecuencia
              </option>
              <option value="Unica" className="p-2 rounded-full ">
                Única
              </option>
              <option value="Semanal" className="p-2 rounded-full">
                Semanal
              </option>
              <option value="Mensual" className="p-2 rounded-full">
                Mensual
              </option>
            </select>
            <select
              className={`bg-slate-300  placeholder-slate-500 rounded h-12 w-full pl-2 ${
                submitted && metodologia == ""
                  ? "border-red-600 border-l-2"
                  : ""
              }`}
              onChange={handleMetodologiaChange}
              defaultValue={metodologia}
            >
              <option value="" className="p-2 rounded-full text-slate-500">
                Metodologia
              </option>
              <option value="Presencial" className="p-2 rounded-full ">
                Presencial
              </option>
              <option value="Virtual" className="p-2 rounded-full ">
                Virtual
              </option>
              <option value="Ambas" className="p-2 rounded-full ">
                Ambas
              </option>
            </select>
          </div>
          <textarea
            type="text"
            name="descripcion"
            placeholder="Descripcion del servicio"
            className={`bg-slate-300 placeholder-slate-500 rounded h-40 w-full pl-2 align-top ${
              submitted && values.descripcion == ""
                ? "border-red-600 border-l-2"
                : ""
            }`}
            value={values.descripcion}
            onChange={handleInputChange}
          />

          <button
            className="bg-coral border border-coral text-white p-2 w-3/4 mt-auto self-center rounded hover:bg-white hover:text-coral transition-all"
            onClick={handleSubmit}
          >
            {publicacion ? "Modificar publicacion" : "Crear publicación"}
          </button>
        </form>
      </div>
    </div>
  );
}
