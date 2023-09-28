import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { buscarServicio, estrellasHtml } from "../utils/Utils";
import Comentario from "./Comentario";

export default function Clase() {
    let { id } = useParams();
    let [data, setData] = useState({});
    let [cargando, setCargando] = useState(true);

    let [modal, setModal] = useState(false);

    let [mail, setMail] = useState("");
    let [telefono, setTelefono] = useState("");
    let [horario, setHorario] = useState("");
    let [mensaje, setMensaje] = useState("");

    const getData = () => {
        buscarServicio(id)
            .then((data) => setData(data))
            .then(() => setTimeout(setCargando(false), 300));
    };

    useEffect(() => {
        getData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>

            {cargando ? (
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                >
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                    </span>
                </div>
            ) : (<>
                {modal ? <div className="fixed top-0 left-0 z-10 w-full h-full  bg-black bg-opacity-80 flex justify-center items-center">
                    <div className="flex flex-col bg-white rounded-3xl text-center items-center p-7 gap-3 relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 61 61" fill="none" className="cursor-pointer absolute right-3 top-3" onClick={() => setModal(false)}>
                            <g clip-path="url(#clip0_269_188)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.1049 38.9148C41.838 39.6461 41.838 40.8462 41.1049 41.5774C40.3736 42.3087 39.1849 42.3087 38.4518 41.5774L30.5093 33.6274L22.5105 41.6335C21.7718 42.3647 20.5756 42.3647 19.8368 41.6335C19.1 40.8835 19.1 39.6836 19.8368 38.9524L27.8356 30.9461L19.893 23.0149C19.1599 22.2836 19.1599 21.0835 19.893 20.3523C20.6224 19.621 21.8112 19.621 22.5443 20.3523L30.4868 28.3023L38.5455 20.2399C39.2843 19.5086 40.4786 19.5086 41.2174 20.2399C41.9543 20.9899 41.9543 22.171 41.2174 22.921L33.1605 30.9836L41.1049 38.9148ZM30.498 0.964844C13.9287 0.964844 0.498047 14.3898 0.498047 30.9648C0.498047 47.5398 13.9287 60.9648 30.498 60.9648C47.0674 60.9648 60.498 47.5398 60.498 30.9648C60.498 14.3898 47.0674 0.964844 30.498 0.964844Z" fill="#E04556" />
                            </g>
                            <defs>
                                <clipPath id="clip0_269_188">
                                    <rect width="60" height="60" fill="white" transform="translate(0.498047 0.964844)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="font-bold text-3xl">Ingrese sus datos</span>
                        <span className="font-semibold text-xl">Para contactar a {data.nombre}</span>
                        <img src={data.img} width={200} height={200} className="rounded-2xl" alt="" />
                        <div className="flex">
                            <div className="flex gap-2 h-5">
                                {estrellasHtml(data.servicio.calificacion)}
                            </div>
                        </div>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Correo electronico"
                                className="bg-slate-300 placeholder-slate-500 rounded h-12 w-full pl-2"
                                onChange={(e) => setMail(e.target.value)}
                            />
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Numero de telefono"
                                    name="numero"
                                    className="bg-slate-300 placeholder-slate-500 rounded h-12 pl-2"
                                    onChange={(e) => setTelefono(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Horario de referencia"
                                    className="bg-slate-300  placeholder-slate-500 rounded h-102 w-full pl-2"
                                    onChange={(e) => setHorario(e.target.value)}
                                />
                            </div>
                            <textarea
                                type="text"
                                placeholder="Mensaje"
                                className="bg-slate-300 placeholder-slate-500 rounded h-40 w-full pl-2 align-top"
                                onChange={(e) => setMensaje(e.target.value)}
                            />
                            <div className="flex self-center">
                                <button className="bg-coral text-white rounded-2xl px-14 py-3 hover:bg-rosa hover:text-coral transition-all border border-coral" onClick={handleSubmit}>
                                    Contacta al profe
                                </button>
                            </div>
                        </form>

                    </div>
                </div> : ""}
                <div className="flex flex-col max-lg:px-10 lg:px-32 gap-10 max-md:items-center">
                    <div className="flex justify-around  max-md:flex-col-reverse max-md:items-center">
                        <div className="flex flex-col w-9/12 max-md:items-center max-md:text-center">
                            <div className="rounded-3xl bg-rosa text-coral w-min px-4 py-2">
                                Matematica
                            </div>
                            <div className="flex flex-col justify-between h-full gap-6 ">
                                <div className="text-3xl mt-7 font-bold">
                                    {data.servicio.descripcion}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-5xl font-bold">
                                        Sobre {data.nombre}
                                    </span>
                                    <p className="text-xl mb-5">{data.experiencia}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col shadow-card p-5 rounded-2xl items-center gap-4 h-min">
                            <img
                                src={data.img}
                                width={230}
                                height={230}
                                alt=""
                                className="rounded-full mx-20"
                            />
                            <span className="text-2xl font-semibold">
                                {data.nombre} {data.apellido}
                            </span>
                            <div className="flex">
                                <div className="flex gap-2 h-8">
                                    {estrellasHtml(data.servicio.calificacion)}
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <div className="flex justify-between">
                                    <span>Precio:</span>
                                    <span>{data.servicio.costo} / hora</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Ubicacion:</span>
                                    <span>{data.ubicacion}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Metodologia:</span>
                                    <span>{data.servicio.metodologia}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Tipo de clase:</span>
                                    <span>{data.servicio.tipoClase}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Frecuencia:</span>
                                    <span>{data.servicio.frecuencia}</span>
                                </div>
                            </div>
                            <div className="flex">
                                <button className="bg-coral text-white rounded-2xl px-8 py-3 hover:bg-rosa hover:text-coral transition-all border border-coral" onClick={() => setModal(true)}>
                                    Contacta al profe
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-5xl font-bold mb-5">Comentarios</span>
                        <div className="flex flex-col container gap-2">
                            {data.servicio.comentarios.map((comentario) => (
                                <Comentario
                                    fecha={comentario.fecha}
                                    mensaje={comentario.mensaje}
                                    admin={data.id == localStorage.getItem("id")}
                                    calificacion={comentario.calificacion}
                                    key={comentario.fecha}
                                />
                            ))}
                        </div>
                    </div>
                </div></>
            )}
        </>
    );
}
