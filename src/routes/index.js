const express = require ('express')
const routes = express.Router()

const postController = require ('../domain/Posts/controllers/postController')
const userController = require ('../domain/Users/controllers/userController')

const authController = require("../domain/Auth/controllers/authController");
const login = require("../src/infrastructure/database/validator/loginTruster");

//Rotas CRUD Post

//Rotas CRUD Users

routes.post("/users/", userController.addUser);

routes.get("/users/", userController.browseUser);

routes.put("/users/:id", userController.updateUser);

routes.delete("/users/:id", userController.deleteUser);

routes.post("/login", Login, authController.login);


module.exports = routes;