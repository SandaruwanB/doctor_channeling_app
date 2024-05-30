const route = require('express').Router();
const HomeController = require('../controllers/homeController');

route.get('*', (req,res)=>{res.render('notFound')});
route.get('/', HomeController.getHome);
route.get('/about', (req,res)=>{res.render('about')});

module.exports = route;