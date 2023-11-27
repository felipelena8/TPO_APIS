const urlApi = "http://localhost:4000/";
console.log("url", urlApi);

const urlWebServices = {
  login: urlApi + "users/login",
  register: urlApi + "users/register",
  updateUser: urlApi + "users/update/",
  isLogged: urlApi + "users/isLogged",
  getUser: urlApi + "users",

  createClass: urlApi + "class/create",
  deleteClass: urlApi + "class/",
  updateClass: urlApi + "class/",
  activateClass: urlApi + "class/activate/",
  getClass: urlApi + "class/",
  contactClassProvider: urlApi + "class/contact/",
  commentClass: urlApi + "class/comment/",

  getClassesByCategory: urlApi + "classes/",

  getNotifications: urlApi + "/notifications",
  notificationChangeSeen: urlApi + "/notifications/changeSeen/",
  notificationChangeState: urlApi + "/notifications/changeState/",

  finalizarContratacion: urlApi + "/contrataciones/",
};

export default urlWebServices;
