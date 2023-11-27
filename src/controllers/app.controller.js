import urlWebServices from "./webServices";

export const login = async function (login) {
  let isLog = await isLogged(localStorage.getItem("token"));
  if (isLog) return isLog;
  let url = urlWebServices.login;
  const formData = new URLSearchParams();
  formData.append("mail", login.mail);
  formData.append("password", login.password);
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    let data = await response.json();
    switch (response.status) {
      case 201:
        localStorage.setItem("token", data.loginUser.token);
        if (data.loginUser.user.img === undefined) {
          localStorage.setItem("img", "/images/user.png");
        } else {
          localStorage.setItem("img", data.loginUser.user.img);
        }
        return true;
      case 400:
        return false;
    }
  } catch (e) {
    console.log(e);
  }
  return false;
};

export const isLogged = async function (token) {
  let url = urlWebServices.isLogged;
  try {
    let response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    });

    let data = await response.json();
    switch (response.status) {
      case 200:
        return data;
      case 401:
        return false;
      case 404:
        return false;
    }
  } catch (e) {
    console.log(e);
  }
};

export const registrate = async function (registro) {
  let url = urlWebServices.register;
  const formData = new URLSearchParams();
  formData.append("mail", registro.mail);
  formData.append("password", registro.password);
  formData.append("telefono", registro.telefono);
  formData.append("nombre", registro.nombre);
  formData.append("apellido", registro.apellido);
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    let data = await response.json();
    console.log(data);
    switch (response.status) {
      case 201:
        localStorage.setItem("token", data.createdUser);
        localStorage.setItem("img", "/images/user.png");
        return true;
      case 400:
        return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const profesorPorId = async function (token) {
  let url = urlWebServices.getUser;
  try {
    let response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": token,
      },
    });

    let data = await response.json();
    switch (response.status) {
      case 200:
        return data;
      case 401:
        return {};
      case 404:
        return {};
    }
  } catch (e) {
    console.log(e);
    return {};
  }
  return {};
};

export const updateUser = async function (update, token) {
  let url = urlWebServices.updateUser;
  const formData = new FormData();
  console.log(update.img);
  formData.append("mail", update.mail);
  formData.append("telefono", update.telefono);
  formData.append("nombre", update.nombre);
  formData.append("apellido", update.apellido);
  formData.append("experiencia", update.experiencia);
  formData.append("ubicacion", update.ubicacion);
  formData.append("img", update.img);
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "x-access-token": token,
      },
      body: formData,
    });

    let data = await response.json();
    console.log(data);
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
  }
};

export const serviciosPorCategoria = async function (categoria) {
  let url = urlWebServices.getClassesByCategory + categoria;
  try {
    let response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    let data = await response.json();
    switch (response.status) {
      case 200:
        return data;
      case 404:
        return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};
export const createClass = async function (clase) {
  let url = urlWebServices.createClass;
  const formData = new URLSearchParams();
  formData.append("categoria", clase.categoria);
  formData.append("tipoClase", clase.tipo);
  formData.append("frecuencia", clase.frecuencia);
  formData.append("metodologia", clase.metodologia);
  formData.append("costo", clase.costo);
  formData.append("duracion", clase.duracion);
  formData.append("descripcion", clase.descripcion);
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": localStorage.getItem("token"),
      },
      body: formData,
    });

    let data = await response.json();
    switch (response.status) {
      case 200:
        return data;
      case 401:
        return false;
      case 400:
        return false;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const buscarServicio = async function (idServicio) {
  let url = urlWebServices.getClass + idServicio;
  try {
    let response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    let data = await response.json();
    switch (response.status) {
      case 200:
        return data;
      case 400:
        return false;
    }
  } catch (e) {
    return false;
  }
};

export const createCommentClass = async function (idClase, comment) {
  let url = urlWebServices.commentClass + idClase;
  const formData = new URLSearchParams();
  formData.append("estrellas", comment.calificacion);
  formData.append("mensaje", comment.comentario);
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": localStorage.getItem("token"),
      },
      body: formData,
    });

    console.log(response.status);
    if (response.status == 401) {
      return false;
    }
  } catch (e) {
    console.log(e);
    return 2;
  }
};

export const changeSeenNotification = async function (idNotification) {
  let url = urlWebServices.notificationChangeSeen + idNotification;
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    let data = await response.json();
    console.log(response.status);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const activateClass = async function (idClase) {
  let url = urlWebServices.activateClass + idClase;
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const changeStateNotification = async function (idNotification, estado) {
  let url = urlWebServices.notificationChangeState + idNotification;
  const formData = new URLSearchParams();
  formData.append("estado", estado);
  try {
    await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
      body: formData,
    });
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const updateClass = async function (idServicio, clase) {
  let url = urlWebServices.updateClass + idServicio;
  const formData = new URLSearchParams();
  formData.append("categoria", clase.categoria);
  formData.append("tipoClase", clase.tipo);
  formData.append("frecuencia", clase.frecuencia);
  formData.append("metodologia", clase.metodologia);
  formData.append("costo", clase.costo);
  formData.append("duracion", clase.duracion);
  formData.append("descripcion", clase.descripcion);
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": localStorage.getItem("token"),
      },
      body: formData,
    });

    switch (response.status) {
      case 200:
        alert("Se actualizo la clase correctamente");
        break;
      case 500:
        alert("Surgio un error al intentar actualizar la clase");
        break;
    }
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const eliminarServicio = async function (idServicio) {
  let url = urlWebServices.deleteClass + idServicio;
  try {
    let response = await fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": localStorage.getItem("token"),
      },
    });

    let data = await response.json();
    switch (response.status) {
      case 200:
        return true;
      case 500:
        return false;
    }
  } catch (e) {
    return false;
  }
};

export const contactarProfesor = async function (idServicio, contacto) {
  let url = urlWebServices.contactClassProvider + idServicio;
  const formData = new URLSearchParams();
  formData.append("mail", contacto.mail);
  formData.append("motivo", contacto.mensaje);
  formData.append("horario", contacto.horario);
  formData.append("telefono", contacto.telefono);
  try {
    let response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/x-www-form-urlencoded",
        "Content-Type": "application/x-www-form-urlencoded",
        "x-access-token": localStorage.getItem("token"),
      },
      body: formData,
    });
    if (response.status == 401) {
      return false;
    }
  } catch (e) {
    return 2;
  }
};

export const finalizarContratacion = async function (idContratacion) {
  let url = urlWebServices.finalizarContratacion + idContratacion;
  try {
    let response = await fetch(url, {
      method: "PUT",
      mode: "cors",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });
  } catch (e) {
    console.log(e);
    return false;
  }
};
