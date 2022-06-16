const express = require("express");
const postsController = require("../domain/Posts/controllers/postsController");
const usersController = require("../domain/Users/controllers/usersController");
const routes = express.Router();

const authController = require("../domain/Auth/controllers/authController");
const generalLogin = require("../infrastructure/database/validator/loginTruster");
const updateUser = require("../infrastructure/database/validator/users/updateUser");
const deleteUser = require("../infrastructure/database/validator/users/deleteUser");
const updatePosts = require("../infrastructure/database/validator/posts/updatePost");
const deletePosts = require("../infrastructure/database/validator/posts/deletePost");
const auth = require("../middlewares/auth")

//Rotas CRUD Posts
routes.post("/posts/:id", postsController.createPosts);
routes.get("/posts", auth, postsController.listPosts);
routes.put("/posts/:id", auth, updateUser, postsController.updatePosts);
routes.delete("/posts/:id", auth, deleteUser, postsController.deletePosts);

//Rotas CRUD Users
routes.post("/users", usersController.addUser);
routes.get("/users", auth, usersController.browseUser);
routes.put("/users/:id", auth, updateUser, usersController.updateUser);
routes.delete("/users/:id", auth, deleteUser, usersController.deleteUser);

//Rotas CRUD Login
routes.post("/login", generalLogin, authController.login);

module.exports = routes;
