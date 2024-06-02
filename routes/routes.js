const route = require('express').Router();
const midlleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');
const adminDash = require('../controllers/adminDashboardController');

route.get('/', midlleware.authNotRequired, (req,res)=>{res.render('index')});
route.get('/about', midlleware.authNotRequired, (req,res)=>{res.render('about')});
route.get('/contact', midlleware.authNotRequired, (req,res)=>{res.render('contact')});
route.get('/doctors', midlleware.authNotRequired, (req,res)=>{res.render('doctors')});
route.get('/services', midlleware.authNotRequired, (req,res)=>{res.render('services')});
route.get('/login', midlleware.authNotRequired, authController.index);

route.post('/login', authController.performLogin);

route.get('/admin/dashboard', midlleware.cookieAuthCheck ,adminDash.getView);

route.get('*', (req,res)=>{res.render('notFound')});

module.exports = route;