const express = require ('express')
const postsController = require ('../domain/Posts/controllers/postsController')
const usersController = require ('../domain/Users/controllers/usersController')
const routes = express.Router()

//Rotas CRUD Posts
routes.post('/posts', postsController.createPosts)
routes.get('/posts', postsController.listPosts)
routes.put('/posts/:id', postsController.updatePosts)
routes.delete('/posts/:id', postsController.deletePosts)

//Rotas CRUD Users
routes.post('/users', usersController.createUsers)
routes.get('/users', usersController.listUser)
routes.put('/users/:id', usersController.updateUsers)
routes.delete('/users/:id', usersController.deleteUsers)


//Rotas CRUD Comentarios?


module.exports = routes