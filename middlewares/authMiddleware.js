const baseHTML = require ('../helpers/baseHTML.js')
const getNavBar = require ('../helpers/getNavBar.js')
const {mensajeError} = require ("../helpers/template")

const loginMiddleware = (req, res, next) => {
    if (!req.session.user || !req.session.isAuthenticated) {
      return res.status(400).send (baseHTML + `<main>${mensajeError("Acceso no autorizado. Por favor, inicia sesión.")}</main>`)
    }
    next();
  };



module.exports = {loginMiddleware};