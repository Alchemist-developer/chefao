const { Posts, Users } = require("../../../infrastructure/database/models");
const bcryptjs = require("bcryptjs");
const userController = require("../../Users/controllers/usersController");

const postController = {
  async createPosts(req, res) {
    const { id } = req.params;
    const { idUsers, content } = req.body;
    try {
      const newPost = await Posts.create({ idUsers: id, content });
      return res.status(201).json(newPost);
    } catch (error) {
      return res
        .status(500)
        .json("Seu post não pode ser resgistrado, acesse novamente o sistema");
    }
  },

  async listPosts(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 200;
      const offset = limit * (parseInt(page) - 1);
      let filter = {
        limit,
        offset,
      };
      const allPostsList = await Posts.findAll(filter);
      return res.status(200).json(allPostsList);
    } catch (error) {
      return res.status(500).json("Erro ao listar os posts");
    }
  },

  async updatePosts(req, res) {
    const { id } = req.params;
    try {
      const { name, apartment, content } = req.body;
      const updatedPost = await Posts.update(
        {
          content,
        },
        {
          where: { idPosts: id },
        }
      );
      if (updatedPost == 0) return res.status(400).json("Post não encontrato");
      return res.status(200).json("Post Atualizado com Sucesso");
    } catch (error) {
      return res.status(500).json("Erro ao tentar atualizar o post");
    }
  },

  async deletePosts(req, res) {
    try {
      const { id } = req.params;
      const posts = await Posts.destroy({
        where: {
          idPosts: id,
        },
      });
      if (!posts) return res.status(404).json("Post não encontrado");
      return res.status(204).json("Post Apagado do Registro");
    } catch (error) {
      return res.status(500).json("Falha ao tentar apagar o post");
    }
  },
};

module.exports = postController;
