const route = require('express').Router();
const midlleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');
const adminDash = require('../controllers/adminDashboardController');
const contactsController = require('../controllers/contactsController');
const userController = require('../controllers/userController');
const channelingController = require('../controllers/channelingController');
const paymentController = require('../controllers/paymentsController');
const doctorController = require('../controllers/doctorController');
const patientController = require('../controllers/patientController');


// default routes
route.get('/', midlleware.authNotRequired, adminDash.getHome);
route.get('/about', midlleware.authNotRequired, (req,res)=>{res.render('about')});
route.get('/apoinment', midlleware.authNotRequired, channelingController.getView);
route.get('/contact', midlleware.authNotRequired, contactsController.index);
route.get('/apoinment/book/:id', midlleware.authNotRequired, channelingController.getDoctorBookingView);
route.get('/apoinment/book/success', midlleware.authNotRequired, (req, res)=>{res.render('channelComplete')});

route.get('/chart/data', channelingController.getChartData);

route.post('/contact', contactsController.addContact);
route.post('/apoinment/book/:id', channelingController.bookAppoinment)

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
route.get('/admin/doctors', midlleware.cookieAuthCheck, doctorController.getAdminView);
route.get('/admin/patients', midlleware.cookieAuthCheck, patientController.getPatients);

route.get('/admin/users/edit/:id', midlleware.cookieAuthCheck, userController.editUser);
route.get('/admin/users/add', midlleware.cookieAuthCheck, userController.addUser);
route.get('/admin/patients/edit/:id', midlleware.cookieAuthCheck, patientController.editPatients);
route.get('/admin/patients/add', midlleware.cookieAuthCheck, patientController.addPatient);
route.get('/admin/doctors/edit/:id', midlleware.cookieAuthCheck, doctorController.editDoctor);
route.get('/admin/doctors/add', midlleware.cookieAuthCheck, doctorController.addDoctor);
route.get('/admin/payments/new', midlleware.cookieAuthCheck, paymentController.newPayment);
route.get('/admin/channelings/edit/:id', midlleware.cookieAuthCheck, channelingController.editChanneling);
route.get('/admin/channelings/new', midlleware.cookieAuthCheck, channelingController.addChanneling);

route.post('/admin/users/edit/:id', midlleware.cookieAuthCheck, userController.upadateUser);
route.post('/admin/patients/edit/:id', midlleware.cookieAuthCheck, patientController.updateUser);
route.post('/admin/doctors/edit/:id', midlleware.cookieAuthCheck, doctorController.updateDoctor);
route.post('/admin/users/add', midlleware.cookieAuthCheck, userController.createUser);
route.post('/admin/patients/add', midlleware.cookieAuthCheck, patientController.createPatient);
route.post('/admin/doctors/add', midlleware.cookieAuthCheck, doctorController.saveDoctor);
route.post('/admin/payments/new', midlleware.cookieAuthCheck, paymentController.createPayment);
route.post('/admin/channelings/new', midlleware.cookieAuthCheck, channelingController.createManualChanneling);

route.post('/admin/contacts/mark/:id', midlleware.cookieAuthCheck, contactsController.markAsRead);
route.post('/admin/contact/reply/:id', midlleware.cookieAuthCheck, contactsController.sendMail);

route.post('/admin/contacts/remove/:id', midlleware.cookieAuthCheck, contactsController.removeMessage);
route.post('/admin/users/remove/:id', midlleware.cookieAuthCheck, userController.removeUser);
route.post('/admin/doctors/remove/:id', midlleware.cookieAuthCheck, doctorController.removeDoctor);
route.post('/admin/patients/remove/:id', midlleware.cookieAuthCheck, patientController.removePatient);
route.post('/admin/payments/remove/:channelingId/:paymentId', midlleware.cookieAuthCheck, paymentController.removePayment);
route.post('/admin/channelings/remove/:id', midlleware.cookieAuthCheck, channelingController.removeChanneling);


// notfound route
route.get('*', (req,res)=>{res.render('notFound')});

module.exports = route;