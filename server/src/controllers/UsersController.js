const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");
const knex = require('../database/knex/index');

class UsersController {
  async create(req, res) {
    const { name, email, cpf, password, position, isAdmin } = req.body;

    const [checkUserExists] = await knex("users").select().where({ email });

    if (checkUserExists) {
      throw new AppError('Este usuário já existe!');
    }

    const hashedPassword = await hash(password, 8);

    await knex("users").insert({
      name,
      email,
      cpf,
      password: hashedPassword,
      position,
      isAdmin
    });

    return res.status(201).json()
  }

  async delete(req, res) {
    const { id } = req.params;

    await knex("users").where({ id }).delete();

    return res.json()
  }

  async update(req, res) {
    const { name, email, password, old_password, position, isAdmin } = req.body;
    const { id } = req.params;

    const user = await knex("users").where({ id }).first();

    if (!user) {
      throw new AppError("O usuário que você está tentando acessar não existe!");
    }

    user.name = name ?? user.name;
    user.email = email ?? user.email;
    user.position = position ?? user.position;
    user.isAdmin = isAdmin ?? user.isAdmin;

    if (password && !old_password) {
      throw new AppError("Você precisa informar a senha antiga para definir a nova senha!")
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);

      if (!checkOldPassword) {
        throw new AppError("A senha antiga não confere.");
      }

      user.password = await hash(password, 8);
    }

    await knex("users").where({ id }).update(user);
    await knex("users").where({ id }).update("update_at", knex.fn.now());

    return res.status(202).json("Usuário atualizado com sucesso!")
  }
}

module.exports = UsersController;