const route = require('express').Router();
const HomeController = require('../controllers/homeController');


route.get('/', HomeController.getHome);
route.get('/about', (req,res)=>{res.render('about')});
route.get('/contact', (req,res)=>{res.render('contact')});


route.get('*', (req,res)=>{res.render('notFound')});

module.exports = route;