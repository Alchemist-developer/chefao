const { Users } = require("../../../infrastructure/database/models");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secret = require("../../../infrastructure/database/config/secret")

const authController = {
    async login(req, res){
        try{
            const {email, senha} = req.body;
            const user = await Users.findOne({
                where: {
                    email
                }
            });
            if (!user){
                return res.status(401).json("Usuário ou Senha invalido, verique e tente novamente");
            }

            if (!bcryptjs.compareSync(senha, user.senha)){
                return res.status(401).json("Usuário ou Senha invalido, verique e tente novamente");
            }
            
            const token = jwt.sign({
                idUser:user.idUser,
                email:user.email
            }, secret.chave);
            return res.json(token);
        }
        catch(error){
            console.error(error);
            return res.status(500).json("Erro ao tentar logar");
        }
    }
}

module.exports = authController;