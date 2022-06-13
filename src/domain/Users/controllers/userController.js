const { Users } = require("../infrastructure/database/models");
const bcryptjs = require("bcryptjs");

const userController = {
  async addUser(req, res) {
    try {
      const { nome, email, senha, unidade_apartamento } = req.body;
      const existingUser = await Users.count({ where: { email } });
      if (existingUser) {
        return res
          .status(400)
          .json("E-mail de usuário já previamente cadastrado");
      }
      const newPassword = bcryptjs.hashSync(senha, 8);
      const newUser = await Users.create({
        nome,
        email,
        senha: newPassword,
        unidade_apartamento,
      });
      res.status(201).json(newUser);
    } catch (error) {
      return res
        .status(500)
        .json("Houve um erro ao tentar cadastrar esse usuário");
    }
  },

  async browseUser(req, res) {
    try {
      const { page = 1 } = req.query;
      const limit = 20;
      const offset = limit * (parseInt(page) - 1);
      let filter = {
        limit,
        offset,
      };
      const allUserList = await Users.findAll(filter);
      return res.status(200).json(allUserList);
    } catch (error) {
      return res.status(500).json("Erro ao listar os usuários cadastrados");
    }
  },

  async updateUser(req, res) {
    const { id } = req.params;

    try {
      const { nome, email, senha, unidade_apartamento } = req.body;
      const userUpdated = await Users.update(
        {
          nome,
          email,
          senha,
          unidade_apartamento,
        },
        {
          where: { idUser: id },
        }
      );

      if (userUpdated == 0)
        return res.status(400).json("Usuário não encontrado");
      return res.status(200).json("Usuário Atualizado com Sucesso");
    } catch (error) {
      return res
        .status(500)
        .json("Erro ao tentar atualizar os dados do usuário");
    }
  },

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const users = await Users.destroy({
        where: {
          idUser: id,
        },
      });
      if (!users) return res.status(404).json("Usuário não encontrado");
      return res.status(204).json("Usuário Apagado do Registro");
    } catch (error) {
      return res
        .status(500)
        .json("Falha ao tentar apagar o registro de usuário");
    }
  },
};