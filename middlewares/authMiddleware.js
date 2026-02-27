const loginMiddleware = (req, res, next) => {
    if (!req.body.email || !req.body.contraseña) {
      return res.status(400).json({ message: "Email y contraseña son requeridos" });
    } 
    next();
  };



module.exports = loginMiddleware;