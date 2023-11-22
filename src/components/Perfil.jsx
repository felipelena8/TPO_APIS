import React, { useEffect, useState } from "react";
import { estrellasHtml, isEmail, sesionIniciada } from "../utils/Utils";
import { profesorPorId, updateUser } from "../controllers/app.controller";

import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function Perfil() {
  const [profesor, setProfesor] = useState({});
  const [cargando, setCargando] = useState(true);
  const [modal, setModal] = useState(false);

  const [profesorUpdate, setProfesorUpdate] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    mail: "",
    img: "",
    experiencia: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfesorUpdate((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const getData = () => {
    profesorPorId(localStorage.getItem("token"))
      .then((data) => {
        setProfesor(data);
        setProfesorUpdate(data);
        localStorage.setItem("img", data.img);
      })
      .then(() => setCargando(false));
  };

  const goTo = useNavigate();
  useEffect(() => {
    if (!sesionIniciada()) {
      goTo("/");
    } else {
      getData();
    }
  }, []);

  const handleGuardar = (e) => {
    e.preventDefault();
    console.log(profesorUpdate);
    if (
      profesorUpdate.nombre &&
      profesorUpdate.apellido &&
      profesorUpdate.telefono &&
      !isNaN(profesorUpdate.telefono) &&
      isEmail(profesorUpdate.mail)
    ) {
      updateUser(profesorUpdate, localStorage.getItem("token")).then(() => {
        getData();
      });
      setModal(false);
    }
  };

  const modalHtml = (
    <div className="fixed top-0 left-0 z-10 w-full h-full  bg-black bg-opacity-80 flex justify-center items-center  sm:py-28">
      <div className="flex flex-col bg-white rounded-3xl text-center items-center  p-3 sm:p-7 my-10 gap-3 relative h-full  max-sm:overflow-y-scroll sm:w-11/12 md:w-8/12 lg:w-7/12 xl:w-4/12">
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
        <span className="font-bold text-3xl mt-8">Modificar perfil</span>
        <div className="flex flex-col gap-3 w-10/12">
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold my-auto ">Nombre: </span>
            <input
              type="text"
              className="flex border rounded p-2"
              name={"nombre"}
              onChange={handleInputChange}
              defaultValue={profesorUpdate.nombre}
            />
          </div>
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold my-auto">Apellido: </span>
            <input
              type="text"
              name={"apellido"}
              onChange={handleInputChange}
              className="flex border rounded p-2"
              defaultValue={profesorUpdate.apellido}
            />
          </div>
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold my-auto">Mail: </span>
            <input
              type="text"
              name={"mail"}
              onChange={handleInputChange}
              className="flex border rounded p-2"
              defaultValue={profesorUpdate.mail}
            />
          </div>
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold my-auto">Telefono: </span>
            <input
              type="number"
              name={"telefono"}
              onChange={handleInputChange}
              className="flex border rounded p-2"
              defaultValue={profesorUpdate.telefono}
            />
          </div>
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold my-auto">Ubicación: </span>
            <input
              type="text"
              name={"ubicacion"}
              onChange={handleInputChange}
              className="flex border rounded p-2"
              defaultValue={profesorUpdate.ubicacion}
            />
          </div>
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold my-auto">Imagen: </span>
            <input
              type="file"
              className="flex border rounded p-2 bg-white"
              encType="multipart/form-data"
              onChange={(e) => {
                setProfesorUpdate({
                  ...profesorUpdate,
                  img: e.target.files[0],
                });
              }}
            />
          </div>
          <div className="flex justify-between gap-3 max-sm:flex-col">
            <span className="font-bold">Experiencia: </span>

            <textarea
              className="h-40 w-2/3 border rounded p-2"
              type="text"
              name={"experiencia"}
              onChange={handleInputChange}
              defaultValue={profesor.experiencia}
            />
          </div>
        </div>
        <button
          className="flex bg-coral text-white border border-coral hover:bg-white hover:text-coral py-2 px-6 rounded-xl text-lg mt-auto"
          onClick={(e) => {
            handleGuardar(e);
          }}
        >
          Guardar
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6">
      {cargando ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col items-center mx-3">
            <h2 className="text-4xl font-bold mb-3 text-coral">Perfil</h2>

            {modal && modalHtml}
            <div className="flex flex-col max-lg:px-10 lg:px-32 gap-10 items-center ">
              <div className="flex flex-col shadow-card p-10 rounded-2xl items-center gap-4 relative">
                <img
                  src={localStorage.getItem("img")}
                  width={230}
                  height={230}
                  alt=""
                  className="rounded-full mx-20  h-56 w-56"
                />
                <div
                  className="flex rounded-full hover:bg-gray-200 cursor-pointer md:absolute top-10 right-10 p-2"
                  onClick={() => {
                    setModal(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 60 60"
                    fill="none"
                  >
                    <path
                      d="M24.1415 42.5H17.4994V35M15.2559 37.2435L43.5267 8.97253C45.4795 7.0199 48.6453 7.0199 50.598 8.97253C52.5505 10.9252 52.5505 14.091 50.598 16.0436L21.91 44.7315C20.5698 46.0717 19.8998 46.7417 19.158 47.3177C18.4991 47.8295 17.7987 48.2855 17.064 48.6807C16.2369 49.1257 15.3529 49.467 13.5849 50.1497L7.5 52.4995L9.4578 46.6252C10.126 44.6207 10.4601 43.6182 10.9248 42.6822C11.3374 41.851 11.8264 41.06 12.3852 40.319C13.0146 39.4847 13.7617 38.7377 15.2559 37.2435Z"
                      stroke="black"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-2xl font-semibold text-center">
                  {profesor.nombre} {profesor.apellido}
                </span>
                <div className="flex">
                  <div className="flex gap-2 h-8">
                    {estrellasHtml(
                      profesor.servicios
                        .map((servicio) => servicio.calificacion)
                        .reduce((a, b) => a + b, 0) / profesor.servicios.length
                    )}
                  </div>
                </div>
                <div className="flex justify-around  max-md:flex-col-reverse max-md:items-center">
                  <div className="flex flex-col w-9/12 max-md:items-center max-md:text-center">
                    <div className="flex flex-col justify-between h-full gap-6 ">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-semibold">
                          Experiencia
                        </span>
                        <p className="text-xl mb-5 text-center">
                          {profesor.experiencia}
                        </p>
                      </div>
                      <div className="flex max-lg:flex-wrap  justify-evenly gap-4">
                        <div className="flex flex-col text-center w-full">
                          <span className="text-2xl font-semibold">
                            Telefono
                          </span>
                          <p className="text-xl mb-5">{profesor.telefono}</p>
                        </div>
                        <div className="flex flex-col text-center w-full">
                          <span className="text-2xl font-semibold">Email</span>
                          <p className="text-xl mb-5">{profesor.mail}</p>
                        </div>
                        <div className="flex flex-col text-center w-full">
                          <span className="text-2xl font-semibold">
                            Ubicacion
                          </span>
                          <p className="text-xl mb-5">{profesor.ubicacion}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
