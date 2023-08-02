const UserRoute = require("./user.routes");

const basePath = '/api/v1';

module.exports = (app) => {
  app.use(`${basePath}/users`, UserRoute);
  // app.use(`${basePath}/books`, BookRoute);

  app.get(`${basePath}/docs`, (req, res) => {

    res.redirect('https://documenter.getpostman.com/view/4330325/2s946fdsQU')
  })

  app.get('/welcome', (req, res) => {
    res.send('welcome')
  })
};