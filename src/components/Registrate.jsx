import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { isEmail } from "../utils/Utils";
import { registrate } from "../controllers/app.controller";

export default function Registrate({ props }) {
  const [values, setValues] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    mail: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const goTo = useNavigate();

  useEffect(() => {
    if (props.sesionIniciada) {
      goTo("/");
    }
  }, [props.sesionIniciada]);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (
      values.nombre &&
      values.apellido &&
      values.numero &&
      !isNaN(values.numero) &&
      values.password &&
      isEmail(values.mail) &&
      values.password.length >= 8
    ) {
      registrate({
        nombre: values.nombre,
        apellido: values.apellido,
        telefono: values.numero,
        password: values.password,
        mail: values.mail,
      }).then((isCreated) => {
        props.setSesionIniciada(isCreated);
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex mx-24 max-lg:mx-8 justify-around max-lg:flex-col gap-20 max-md:gap-3 items-center w-">
        <div className="font-bold text-6xl max-sm:text-2xl max-sm:text-center">
          ¡Da clases! <br />
          ¡Vivi de lo que te apasiona!
        </div>
        <div className="flex flex-col text-center p-8 justify-between gap-10 rounded-3xl shadow-card max-lg:w-full">
          <span className="font-bold text-3xl max-sm:text-2xl">
            Crea tu perfil
          </span>
          <form action="" className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleInputChange}
                className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
              />
              <input
                type="text"
                placeholder="Apellido"
                name="apellido"
                value={values.apellido}
                onChange={handleInputChange}
                className="w-full bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
              />
            </div>
            {submitted && (!values.nombre || !values.apellido) ? (
              <div className="flex gap-2">
                <span className="w-full text-left text-red-500">
                  {!values.nombre ? "Ingrese su nombre" : ""}
                </span>{" "}
                <span className="w-full text-left text-red-500">
                  {!values.apellido ? "Ingrese su apellido" : ""}
                </span>
              </div>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Numero de telefono"
              name="numero"
              value={values.numero}
              onChange={handleInputChange}
              className="bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
            />
            {(submitted && !values.numero) || isNaN(values.numero) ? (
              <span className="w-full text-left text-red-500">
                {!values.numero
                  ? "Ingrese su numero de telefono"
                  : isNaN(values.numero)
                  ? "Debe ingresar un numero"
                  : ""}
              </span>
            ) : (
              ""
            )}
            <input
              type="text"
              placeholder="Correo electronico"
              name="mail"
              value={values.mail}
              onChange={handleInputChange}
              className="bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
            />
            {submitted && !isEmail(values.mail) ? (
              <span className="w-full text-left text-red-500">
                Ingrese su email
              </span>
            ) : (
              ""
            )}
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={values.password}
              onChange={handleInputChange}
              className="bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
            />
            {submitted && !values.password ? (
              <span className="w-full text-left text-red-500">
                Ingrese una contraseña
              </span>
            ) : values.password.length < 8 ? (
              <span className="w-full text-left text-red-500">
                La contraseña debe tener minimo 8 caracteres
              </span>
            ) : (
              ""
            )}
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-5 p-2 bg-coral text-white text-lg rounded-xl w-full font-bold"
            >
              Empezar ahora
            </button>
            {setSubmitted ? (
              <span className="w-full text-left text-red-500">
                El mail ya se encuentra registrado
              </span>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
