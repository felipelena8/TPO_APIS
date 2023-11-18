import urlWebServices from "./webServices";

export const login = async function (login) {
    let isLog = await isLogged(localStorage.getItem("token"))
    if (isLog) return isLog
    let url = urlWebServices.login
    const formData = new URLSearchParams();
    formData.append('mail', login.mail);
    formData.append('password', login.password);
    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        });

        let data = await response.json()
        console.log(data)
        switch (response.status) {
            case 201:
                localStorage.setItem("token", data.loginUser.token);
                if (data.loginUser.user.img === undefined) {
                    console.log("1")
                    localStorage.setItem("img", "/images/user.png")
                } else {
                    console.log("2")
                    localStorage.setItem("img", data.loginUser.user.img)
                }
                return true;
            case 400:
                return false;
        }

    } catch (e) {
        console.log(e);
    };
}

export const isLogged = async function (token) {
    let url = urlWebServices.isLogged
    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': token
            },
        });

        let data = await response.json()
        switch (response.status) {
            case 200:
                return data
            case 401:
                return false;
            case 404:
                return false;
        }

    } catch (e) {
        console.log(e);
    };
}

export const registrate = async function (registro) {
    let url = urlWebServices.register
    const formData = new URLSearchParams();
    formData.append('mail', registro.mail);
    formData.append('password', registro.password);
    formData.append('telefono', registro.telefono);
    formData.append('nombre', registro.nombre);
    formData.append('apellido', registro.apellido);
    try {
        let response = await fetch(url, {
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData,
        });

        let data = await response.json()
        console.log(data)
        switch (response.status) {
            case 201:
                localStorage.setItem("token", data.createdUser.token);
                return true;
            case 400:
                return false;
        }

    } catch (e) {
        console.log(e);
        return false;
    };
}

export const profesorPorId = async function (token) {
    let url = urlWebServices.getUser
    try {
        let response = await fetch(url, {
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers: {
                'Accept': 'application/x-www-form-urlencoded',
                // 'x-access-token': WebToken.webToken,
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': token
            },
        });

        let data = await response.json()
        switch (response.status) {
            case 200:
                return data
            case 401:
                return false;
            case 404:
                return false;
        }

    } catch (e) {
        console.log(e);
        return false;
    };
}

export const updateUser = async function (update, token) {
    let url = urlWebServices.updateUser
    const formData = new FormData();
    console.log(update.img)
    formData.append('mail', update.mail);
    formData.append('telefono', update.telefono);
    formData.append('nombre', update.nombre);
    formData.append('apellido', update.apellido);
    formData.append('experiencia', update.experiencia)
    formData.append("ubicacion", update.ubicacion)
    formData.append('img', update.img)
    try {
        let response = await fetch(url, {
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers: {
                'x-access-token': token,
            },
            body: formData,
        });

        let data = await response.json()
        console.log(data)
        switch (response.status) {
            case 20:
                localStorage.setItem("token", data.createdUser.token);
                return true;
            case 400:
                return false;
        }

    } catch (e) {
        console.log(e);
        return false;
    };
}