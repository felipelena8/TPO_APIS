import urlWebServices from "./webServices";

export const login = async function (login) {
    let isLog = await isLogged(localStorage.getItem("token"))
    console.log(isLog)
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
                break;
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
        console.log(data)
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

