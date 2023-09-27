async function getData() {
    return await fetch("/servicios.json")
        .then(res => res.json())
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

export { getData, buscarServicio, calcularEstrellas };