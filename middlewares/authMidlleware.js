const horaMiddleware = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedtime = `${hours}:${minutes}`;
    req.dateType = `Son las ${formattedtime}`;
    next();
  };



module.exports = horaMiddleware;