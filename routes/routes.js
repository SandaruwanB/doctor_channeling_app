const route = require('express').Router();

route.get('/', (req,res)=>{res.render('index')});
route.get('/about', (req,res)=>{res.render('about')});
route.get('/contact', (req,res)=>{res.render('contact')});
route.get('/doctors', (req,res)=>{res.render('doctors')});
route.get('/services', (req,res)=>{res.render('services')});
route.get('/login', (req,res)=>{res.render('login')});


route.get('*', (req,res)=>{res.render('notFound')});

module.exports = route;