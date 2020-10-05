const { Router } = require('express');
const router = Router();
const googleUserRoute = require('./app/routes/googleApi');

const initializeRoutes = () => {
  router.use('/googleApi', googleUserRoute);

  return router;
};

module.exports = {
  initializeRoutes,
};
