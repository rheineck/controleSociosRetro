const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class AssociatesImgController {
  async update(req, res) {
    const { id } = req.params;

    const pictureFilename = req.file.filename;
    const diskStorage = new DiskStorage();

    const associate = await knex("associates").where({ id }).first();

    if (!associate) {
      throw new AppError("O associado que você deseja editar não existe.", 401);
    }

    if (associate.picture) {
      await diskStorage.deleteFile(associate.picture);
    }

    const filename = await diskStorage.saveFile(pictureFilename);
    associate.picture = filename;

    await knex("associates").update(associate).where({ id });

    return res.json(associate);
  }
}

module.exports = AssociatesImgController;