const express = require('express');
const routes = express.Router();


const loginController = require('../controllers/loginController');
routes.post('/login', loginController.login);

const registerController=  require ("../controllers/registerController")
routes.post("/register",registerController.register);

const listController =  require ("../controllers/listController")
routes.get("/list", listController.list);

module.exports = routes;