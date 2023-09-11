import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [categoriasVisibles, setCategoriasVisibles] = useState(false);
  const [data, setData] = useState([]);
  const [navMobile, setNavMobile] = useState(false);

  const getData = () => {
    fetch("/categorias.json").then(response => response.json()).then(json => setData(json))
  }

  useEffect(() => {
    getData()

  }, [])

  const categorias = data.map(element => <li className="border-b p-1 w-full hover:bg-slate-200 pl-2 rounded-lg"><a href={"/clases/"+element.toLowerCase()}>{element}</a></li>)

  return (
    <header className="py-14">
      <nav class="bg-white border-gray-200 flex align-middle justify-center">
        <ul className="flex justify-between px-32 w-full align-middle items-center max-lg:px-5 max-md:hidden">
          <li className="flex">
            <div className="relative justify-center items-center flex">
              <input type="text" className="p-2 bg-slate-300 placeholder-slate-500 rounded" placeholder="Buscar" />
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none" className="absolute right-2 top-auto">
                <path d="M24.9505 14.3502C24.9505 17.2617 23.7784 19.897 21.8774 21.814C21.1665 22.5309 20.3542 23.1466 19.4645 23.6378C17.9492 24.4741 16.2072 24.9505 14.3502 24.9505C8.4959 24.9505 3.75 20.2046 3.75 14.3502C3.75 8.4959 8.4959 3.75 14.3502 3.75C20.2046 3.75 24.9505 8.4959 24.9505 14.3502Z" stroke="#A9A6A6" stroke-width="5" />
                <path d="M22.6943 22.6941L27.3591 27.3589" stroke="#A9A6A6" stroke-width="5" stroke-linecap="round" />
              </svg>
            </div>
          </li>
          <li >
            <span className="text-slate-600 hover:text-purple-800 cursor-pointer relative" onClick={() => setCategoriasVisibles(!categoriasVisibles)}>Categorias</span>

            {(categoriasVisibles && <ul className="flex flex-wrap rounded-lg absolute bg-white mt-4 border flex-col z-10 w-64">{categorias}</ul>)}

          </li>
          <li className="text-slate-600 hover:text-purple-800"><NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : ""} >Inicio</NavLink></li>
          <li className="text-slate-600 hover:text-purple-800"><NavLink to="como-funciona" className={({ isActive }) => isActive ? "text-orange-500" : ""} >Como funciona</NavLink></li>
          <li className="flex justify-between">
            <Link className="px-3 py-2 mx-2 border-black border rounded transition ease-in-out hover:bg-black hover:text-white"to={"iniciar-sesion"}>Iniciar sesion</Link>
            <Link className="px-3 py-2 mx-2 bg-black rounded text-white transition ease-in-out hover:bg-white hover:text-black border border-black" to="registrate">Registrate</Link>
          </li>
        </ul >
        <div className="flex flex-col justify-between w-full md:hidden">
          <ul className="flex justify-between w-full px-3">
            <li className="cursor-pointer inline-block">
              <div className="flex" onClick={() => setNavMobile(!navMobile)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32" fill="none">
                  <g clip-path="url(#clip0_147_1622)">
                    <path d="M6 8H26" stroke="#323131" stroke-width="3" />
                    <path d="M6 16H26" stroke="#323131" stroke-width="3" />
                    <path d="M6 24H18" stroke="#323131" stroke-width="3" />
                    <path d="M22 24L26 24" stroke="#FF5202" stroke-width="3" />
                  </g>
                  <defs>
                    <clipPath id="clip0_147_1622">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs></svg>
              </div>
            </li>
            <li>Logo</li>
          </ul>

          {(navMobile && <div className="p-3" id="mobile-menu">
            <div className="pb-3 flex flex-col">
              <Link to="iniciar-sesion" className={({ isActive }) => "py-3 border-b" + (isActive ? " text-orange-500" : "")}>Inicia sesion</Link>
              <Link to="registrate" className={({ isActive }) => "py-3 border-b" + (isActive ? " text-orange-500" : "")}>Regístrate</Link>

            </div>
            <ul className="flex flex-col justify-center">
              <li className="">
                <div className="justify-center items-center flex ">
                  <input type="text" className="p-2 bg-slate-300 placeholder-slate-500 rounded w-full" placeholder="Buscar" />
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 30 30" fill="none" className="absolute right-5 top-auto">
                    <path d="M24.9505 14.3502C24.9505 17.2617 23.7784 19.897 21.8774 21.814C21.1665 22.5309 20.3542 23.1466 19.4645 23.6378C17.9492 24.4741 16.2072 24.9505 14.3502 24.9505C8.4959 24.9505 3.75 20.2046 3.75 14.3502C3.75 8.4959 8.4959 3.75 14.3502 3.75C20.2046 3.75 24.9505 8.4959 24.9505 14.3502Z" stroke="#A9A6A6" stroke-width="5" />
                    <path d="M22.6943 22.6941L27.3591 27.3589" stroke="#A9A6A6" stroke-width="5" stroke-linecap="round" />
                  </svg>
                </div>
              </li>
              <li className="text-slate-600 hover:bg-zinc-100 p-2 rounded border border-t-0">
                <span className="font-bold border-b w-full block text-lg pb-2">Categorias</span>
                <ul>{categorias}</ul>
              </li>
              <li className="text-slate-600 hover:bg-zinc-100 p-2 rounded border border-t-0"> <NavLink to="/como-funciona" className={({ isActive }) => isActive ? "text-orange-500" : ""} >Como funciona</NavLink></li>
            </ul>
          </div>)}
        </div>
      </nav >
    </header >
  );
}
function intercambiarVisibilidad() {
  let header = document.getElementById("mobile-menu");
  if (header.classList.contains("hidden")) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
}

