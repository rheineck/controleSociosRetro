const AppError = require("../utils/AppError");
const knex = require("../database/knex/index");

class AssociatesController {
  async create(req, res) {
    const associateData = req.body;

    const checkUserExists = await knex("associates").select().where(associateData.email);
    // let checkUserExists = false;
    if (checkUserExists) {
      throw new AppError('Este associado já está cadastrado!');
    }

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
    });


    return res.status(201).json()
  }
}

module.exports = AssociatesController;