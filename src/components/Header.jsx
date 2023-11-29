import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header({ props }) {
  const [categoriasVisibles, setCategoriasVisibles] = useState(false);
  const [data, setData] = useState([]);
  const [navMobile, setNavMobile] = useState(false);
  const [mostrarPerfil, setMostrarPerfil] = useState(false);

  const { sesionIniciada, setSesionIniciada, imgChanged } = props;

  const getData = () => {
    fetch("/categorias.json")
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  const goTo = useNavigate();

  useEffect(() => {
    getData();
  }, [imgChanged]);

  function cerrarSesion() {
    localStorage.clear();
    setSesionIniciada(false);
    goTo("");
  }

  const categorias = data.map((element) => (
    <li
      className="border-b p-1 w-full hover:bg-coral hover:text-white transition-all pl-2 rounded-lg"
      key={element.toLowerCase()}
    >
      <a href={"/clases/" + element.toLowerCase()}>{element}</a>
    </li>
  ));

  const miniPerfil = (
    <div
      className="rounded-full relative w-14 h-14 cursor-pointer"
      onClick={() => setMostrarPerfil(!mostrarPerfil)}
    >
      <img
        src={
          localStorage.getItem("img") != "undefined"
            ? localStorage.getItem("img")
            : "/images/user.png"
        }
        alt=""
        className="rounded-full w-full h-full"
      />
      {mostrarPerfil && (
        <div className="absolute mt-5 max-lg:right-0 -right-1/2 shadow-2xl border-2 border-coral bg-white py-2 px-2 rounded-lg z-10">
          <ul className="w-full flex flex-col gap-1">
            <li className="flex align-middle py-2   border-b pr-12 border-black hover:text-coral cursor-pointer justify-between w-full">
              <NavLink to="/notificaciones">Notificaciones </NavLink>
            </li>
            <li className="py-2   border-b pr-12 border-black hover:text-coral cursor-pointer">
              <NavLink to="/perfil" className="w-full">
                Perfil
              </NavLink>{" "}
            </li>
            <li className="py-2   border-b pr-12 border-black hover:text-coral cursor-pointer">
              <NavLink to="/mis-clases">Mis clases</NavLink>
            </li>
            <li className="py-2   border-b pr-12 border-black hover:text-coral cursor-pointer">
              <NavLink to="/contrataciones">Contrataciones</NavLink>
            </li>
            <li
              className="py-2   border-b pr-12 border-black hover:text-coral cursor-pointer"
              onClick={(e) => cerrarSesion()}
            >
              Cerrar Sesion
            </li>
          </ul>
        </div>
      )}
    </div>
  );

  return (
    <header className="pt-6 pb-6">
      <nav className="bg-white border-gray-200 flex align-middle justify-center">
        <ul className="flex justify-between px-32 w-full align-middle items-center max-lg:px-5 max-md:hidden">
          <li>
            <span
              className="text-slate-600 hover:text-purple-800 cursor-pointer relative"
              onClick={() => setCategoriasVisibles(!categoriasVisibles)}
            >
              Categorias
            </span>

            {categoriasVisibles && (
              <ul className="flex flex-wrap rounded-lg absolute bg-white mt-4 shadow-xl flex-col z-10 w-64">
                {categorias}
              </ul>
            )}
          </li>
          <li className="text-slate-600 hover:text-purple-800">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-coral" : "")}
            >
              Inicio
            </NavLink>
          </li>

          {sesionIniciada ? (
            miniPerfil
          ) : (
            <li className="flex justify-between">
              <Link
                className="px-3 py-2 mx-2 border-2 border-coral rounded text-coral transition ease-in-out hover:bg-coral hover:text-white"
                to={"iniciar-sesion"}
              >
                Iniciar sesion
              </Link>
              <Link
                className="px-3 py-2 mx-2 bg-coral rounded text-white transition ease-in-out hover:bg-white hover:text-coral border-2 border-coral"
                to="registrate"
              >
                Registrate
              </Link>
            </li>
          )}
        </ul>
        <div className="flex flex-col justify-between w-full md:hidden">
          <ul className="flex justify-between w-full px-3">
            <li className="cursor-pointer inline-block">
              <div className="flex" onClick={() => setNavMobile(!navMobile)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_147_1622)">
                    <path d="M6 8H26" stroke="#323131" strokeWidth="3" />
                    <path d="M6 16H26" stroke="#323131" strokeWidth="3" />
                    <path d="M6 24H18" stroke="#323131" strokeWidth="3" />
                    <path d="M22 24L26 24" stroke="#FF5202" strokeWidth="3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_147_1622">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </li>
            <li>{sesionIniciada && miniPerfil}</li>
          </ul>

          {navMobile && (
            <div className="p-3" id="mobile-menu">
              {sesionIniciada ? (
                <button
                  className={
                    "border-b p-1 w-full hover:bg-coral hover:text-white transition-all pl-2 rounded-lg text-left"
                  }
                  onClick={cerrarSesion}
                >
                  Cerrar sesion
                </button>
              ) : (
                <div className="pb-3 flex flex-col">
                  <Link
                    to="iniciar-sesion"
                    className={
                      "border-b p-1 w-full hover:bg-coral hover:text-white transition-all pl-2 rounded-lg text-left"
                    }
                  >
                    Inicia sesion
                  </Link>
                  <Link
                    to="registrate"
                    className={
                      "border-b p-1 w-full hover:bg-coral hover:text-white transition-all pl-2 rounded-lg text-left"
                    }
                  >
                    Regístrate
                  </Link>
                </div>
              )}
              <ul className="flex flex-col justify-center">
                <li className="p-2 rounded border ">
                  <Link
                    to="/"
                    className="font-bold border-b w-full block text-lg pb-2"
                  >
                    Inicio
                  </Link>
                </li>
                <li className="p-2 rounded border border-t-0">
                  <span className="font-bold border-b w-full block text-lg pb-2">
                    Categorias
                  </span>
                  <ul>{categorias}</ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <hr className="mt-4" />
    </header>
  );
}
