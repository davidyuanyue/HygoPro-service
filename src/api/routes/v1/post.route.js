const routes = require('express').Router();

routes.post('/', (req, res) => {
   console.log(req.body);
  res.status(200).json({ message: 'Connected!' });
});

module.exports = routes;