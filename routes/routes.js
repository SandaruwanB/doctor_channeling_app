const route = require('express').Router();
const midlleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');
const adminDash = require('../controllers/adminDashboardController');
const contactsController = require('../controllers/contactsController');
const userController = require('../controllers/userController');
const channelingController = require('../controllers/channelingController');
const paymentController = require('../controllers/paymentsController');

// default routes
route.get('/', midlleware.authNotRequired, (req,res)=>{res.render('index')});
route.get('/about', midlleware.authNotRequired, (req,res)=>{res.render('about')});
route.get('/contact', midlleware.authNotRequired, contactsController.index);
route.get('/doctors', midlleware.authNotRequired, (req,res)=>{res.render('doctors')});
route.post('/contact', contactsController.addContact);

// auth routes
route.get('/login', midlleware.authNotRequired, authController.index);
route.post('/login', authController.performLogin);
route.post('/logout', authController.logout);

// admin routes
route.get('/admin/dashboard', midlleware.cookieAuthCheck ,adminDash.getView);
route.get('/admin/users', midlleware.cookieAuthCheck, userController.getUsers);
route.get('/admin/channelings', midlleware.cookieAuthCheck, channelingController.getAdminView);
route.get('/admin/contacts', midlleware.cookieAuthCheck, contactsController.getAdminView);
route.get('/admin/contact/reply/:id', midlleware.cookieAuthCheck, contactsController.replyMessageGet);
route.get('/admin/payments', midlleware.cookieAuthCheck, paymentController.getView);


route.post('/admin/contacts/:id', midlleware.cookieAuthCheck, contactsController.removeMessage);



// notfound route
route.get('*', (req,res)=>{res.render('notFound')});

module.exports = route;