const express = require ('express')
const postsController = require ('../domain/Posts/controllers/postsController')
const usersController = require ('../domain/Users/controllers/usersController')
const routes = express.Router()

const authController = require("../domain/Auth/controllers/authController");
const login = require("../src/infrastructure/database/validator/loginTruster");

//Rotas CRUD Posts
routes.post('/posts', postsController.createPosts)
routes.get('/posts', postsController.listPosts)
routes.put('/posts/:id', postsController.updatePosts)
routes.delete('/posts/:id', postsController.deletePosts)

//Rotas CRUD Users
routes.post("/users/", userController.addUser);

routes.get("/users/", userController.browseUser);

routes.put("/users/:id", userController.updateUser);

routes.delete("/users/:id", userController.deleteUser);

routes.post("/login", Login, authController.login);

//Rotas CRUD Comentarios?


module.exports = routes