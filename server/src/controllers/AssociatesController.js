const AppError = require("../utils/AppError");
const knex = require("../database/knex/index");

class AssociatesController {
  async create(req, res) {
    const associateData = req.body;
    const user_id = req.user.id;

    //const [checkUserExists] = await knex("associates").select().where(associateData.cpf);

    //if (checkUserExists) {
    //  throw new AppError('Este associado já está cadastrado!');
    //}

    await knex("associates").insert({
      name: associateData.name,
      email: associateData.email,
      maritalStatus: associateData.maritalStatus,
      spouse: associateData.spouse,
      position: associateData.position,
      address: associateData.address,
      number: associateData.number,
      district: associateData.district,
      complement: associateData.complement,
      city: associateData.city,
      state: associateData.state,
      cep: associateData.cep,
      career: associateData.career,
      rg: associateData.rg,
      cpf: associateData.cpf,
      status: associateData.status,
      phone: associateData.phone,
      user_id,
      // isUser
    });


    return res.status(201).json()
  }

  async update(req, res) {
    const associate = req.body;
    const { id } = req.params;

    const user = await knex("associates").where({ id }).first();

    if (!user) {
      throw new AppError("O associado que você está tentando acessar não existe!");
    }

    user.name = associate.name ?? user.name;
    user.email = associate.email ?? user.email;
    user.maritalStatus = associate.maritalStatus ?? user.maritalStatus;
    user.spouse = associate.spouse ?? user.spouse;
    user.position = associate.position ?? user.position;
    user.address = associate.address ?? user.address;
    user.number = associate.number ?? user.number;
    user.district = associate.district ?? user.district;
    user.complement = associate.complement ?? user.complement;
    user.city = associate.city ?? user.city;
    user.state = associate.state ?? user.state;
    user.cep = associate.cep ?? user.cep;
    user.career = associate.career ?? user.career;
    user.rg = associate.rg ?? user.rg;
    user.cpf = associate.cpf ?? user.cpf;
    user.status = associate.status ?? user.status;
    user.phone = associate.phone ?? user.phone;

    await knex("associates").where({ id }).update(user);
    await knex("associates").where({ id }).update("update_at", knex.fn.now());

    return res.status(202).json("Sócio atualizado com sucesso!")

  }
}

module.exports = AssociatesController;