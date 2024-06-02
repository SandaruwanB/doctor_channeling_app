const route = require('express').Router();
const authController = require('../controllers/authController');
const adminDash = require('../controllers/adminDashboardController');

route.get('/', (req,res)=>{res.render('index')});
route.get('/about', (req,res)=>{res.render('about')});
route.get('/contact', (req,res)=>{res.render('contact')});
route.get('/doctors', (req,res)=>{res.render('doctors')});
route.get('/services', (req,res)=>{res.render('services')});
route.get('/login', authController.index);

route.post('/login', authController.performLogin);

route.get('/admin/dashboard', adminDash.getView);

route.get('*', (req,res)=>{res.render('notFound')});

module.exports = route;