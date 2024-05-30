const route = require('express').Router();
const HomeController = require('../controllers/homeController');

route.get('/', HomeController.getHome);

module.exports = route;