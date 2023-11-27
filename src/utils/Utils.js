let estrellaLlena = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" fill="none">
    <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="#FFCB45" />
</svg>
let estrellaMitad = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" fill="none">
    <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="url(#paint0_linear_253_172)" style={{ mixBlendMode: 'multiply' }} />
    <defs>
        <linearGradient id="paint0_linear_253_172" x1="3.23083e-09" y1="14" x2="30" y2="14" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFCB45" />
            <stop offset="0.5" stopColor="#FFCB45" />
            <stop offset="0.5001" stopColor="#D2D0CA" />
        </linearGradient>
    </defs>
</svg>
let estrellaVacia = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 29" fill="none">
    <path d="M15.0591 0.164368L20.1579 8.7553L30.0591 10.8595L23.3091 18.2731L24.3296 28.1644L15.0591 24.1553L5.78857 28.1644L6.80908 18.2731L0.059082 10.8595L9.96031 8.7553L15.0591 0.164368Z" fill="#D3D0CA" />
</svg>


async function getData() {
    return await fetch("/servicios.json")
        .then(res => res.json())
}

async function serviciosPorCategoria(categoria) {
    let datos = await getData()
    let clases = []
    for (let i in datos) {
        let profesor = datos[i]
        let servicios = []
        for (let j in profesor.servicios) {
            if (profesor.servicios[j].activo == true && profesor.servicios[j].categoria.toLowerCase() == categoria.toLowerCase()) {
                servicios.push(profesor.servicios[j])
            }
        }
        if (servicios.length != 0) {
            profesor.servicios = servicios
            clases.push(profesor)
        }
    }
    return await clases
}

async function profesorPorId(idProfesor) {
    let datos = await getData()
    for (let i in datos) {
        let profesor = datos[i]
        if (profesor.id == idProfesor) {
            return await profesor
        }
    }
    return {}
}

async function filtrarServicios(datos, tipo, frecuencia, calificacion) {
    let calificaciones = calificacion.map((elem, i) => elem ? i + 1 : -1).filter(elem => elem != -1)

    for (let i in datos) {
        let profesor = datos[i]
        profesor.servicios = profesor.servicios.filter((elem) => {
            let coincide = true
            if (tipo != "Todas") {
                coincide = (elem.tipoClase == tipo) && coincide
            }
            if (frecuencia != "Todas") {
                coincide = (elem.frecuencia == frecuencia) && coincide
            }
            if (calificaciones.length != 0) {
                let redondeo = Math.round(elem.calificacion)
                if (redondeo == 0) { redondeo = 1 }
                coincide = calificaciones.includes(redondeo) && coincide
            }
            return coincide
        })
    }
    return await datos
}

async function buscarServicio(id) {
    let datos = await getData()
    for (let i in datos) {
        let profesor = datos[i]
        for (let j in profesor.servicios) {
            if (profesor.servicios[j].id == id) {
                profesor.servicio = profesor.servicios[j];
                delete profesor.servicios
                return await profesor
            }
        }
    }
    return {}
}



function reseñaEstrella(calificacion, setCalificacion) {
    let estrellas = []
    for (let i = 0; i <= 4; i++) {
        if (i < calificacion) {
            estrellas.push(estrellaLlena)
        } else {
            estrellas.push(estrellaVacia)
        }
    }
    return <div className="flex gap-2 h-4">{estrellas.map((estrella, i) => <div className="flex h-7 mb-3 self-center center" key={i} value={i} onClick={(e) => { setCalificacion(i + 1) }}>{estrella}</div>)}</div>
}

function calcularEstrellas(calificacion) {
    let estrellas = []
    let entero = Math.trunc(calificacion)
    for (let i = 1; i <= 5; i++) {
        if (i <= entero) {
            estrellas.push(1);
        } else if (i - 1 < calificacion && calificacion < i) {
            let decimal = Math.round((calificacion - (i - 1)) * 10) / 10;
            if (decimal <= 0.5) {
                if (Math.abs(decimal - 0.5) <= 0.2) {
                    estrellas.push(0.5)
                } else {
                    estrellas.push(0)
                }
            } else {
                if (decimal - 0.5 <= 0.2) {
                    estrellas.push(0.5)
                } else {
                    estrellas.push(1)
                }
            }
        } else {
            estrellas.push(0)
        }
    }
    return estrellas
}

function estrellasHtml(calificacion) {
    return calcularEstrellas(calificacion).map((elemento, i) => <div className="flex h-full w-full" key={i}>{(elemento == 1 ? estrellaLlena : (elemento ? estrellaMitad : estrellaVacia))}</div>)
}


function formatearFecha(fechaString) {
    const opcionesDeFormato = { year: 'numeric', month: 'short', day: 'numeric' };
    const fecha = new Date(fechaString);
    const [dia, mes, año] = fecha.toLocaleDateString(undefined, opcionesDeFormato).split(' ');
    return `${dia} ${mes}. ${año}`;
}

function isEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)

}


async function getCategorias() {
    return await fetch("/categorias.json").then(response => response.json())
}

function sesionIniciada() {
    return localStorage.getItem("token") != undefined
}

function calcularCalificacionServicio(servicio) {
    console.log(servicio)
    let n = servicio.comentarios ? servicio.comentarios.length : 0
    if (n == 0) return 0;
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += servicio.comentarios[i].estrellas
    }
    return suma / n
}

function calcularCalificacionUsuario(user) {
    let n = user.servicios.length
    if (n == 0) return 0;
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += calcularCalificacionServicio(user.servicio[i])
    }
    return suma / n
}

function getContratacionesProfesor(profesor) {
    let contrataciones = []
    for (let i = 0; i < profesor.servicios.length; i++) {
        contrataciones = contrataciones.concat(profesor.servicios[i].contrataciones)
    }
    return contrataciones;
}


export { getData, buscarServicio, formatearFecha, estrellasHtml, isEmail, reseñaEstrella, serviciosPorCategoria, filtrarServicios, profesorPorId, getCategorias, getContratacionesProfesor, sesionIniciada, calcularCalificacionServicio, calcularCalificacionUsuario };