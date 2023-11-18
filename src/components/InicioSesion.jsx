import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { isEmail } from "../utils/Utils";
import { login } from "../controllers/app.controller";

export default function InicioSesion({ props }) {
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [existe, setExiste] = useState(false);

  const goTo = useNavigate();

  const { sesionIniciada, setSesionIniciada } = props;

  useEffect(() => {
    if (sesionIniciada == true) {
      goTo("/");
    }
  }, [existe]);

  let handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (password.length >= 8 && isEmail(mail)) {
      login({ mail: mail, password: password }).then((existeData) => {
        setExiste(existeData);
        setSesionIniciada(true);
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-5/12 max-lg:w-5/6 justify-center shadow-card rounded-3xl flex flex-col items-center">
        <div className="font-bold text-2xl text-center p-8">Iniciar sesion</div>
        <div className="flex flex-col max-md:w-9/12 w-4/5 items-center gap-2 mb-14">
          <input
            type="text"
            placeholder="Correo electronico"
            className="bg-slate-300 placeholder-slate-500 rounded h-10 w-full pl-2"
            onChange={(e) => setMail(e.target.value)}
          />
          {submitted && !isEmail(mail) ? (
            <span className="w-full text-left text-red-500">
              Ingrese su email
            </span>
          ) : (
            ""
          )}
          <input
            type="password"
            placeholder="Contraseña"
            className="bg-slate-300 placeholder-slate-500 rounded h-10 w-full pl-2"
            onChange={(e) => setPassword(e.target.value)}
          />
          {submitted && password.length < 8 ? (
            <span className="w-full text-left text-red-500">
              La contraseña debe tener minimo 8 caracteres
            </span>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="my-3 p-2 bg-coral text-white text-lg rounded-xl w-full font-bold"
            onClick={handleSubmit}
          >
            Entrar
          </button>
          <span className="font-bold text-lg text-blue-600">
            ¿Has olvidado tu constraseña?
          </span>
          {!existe ? (
            <span className="w-full text-center text-red-500">
              Tu contraseña no es correcta
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
