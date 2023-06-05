const {Gender} = require('../modules/modules')

class GenderController {
  async create(req, res) {
    const {name} = req.body
    const gender = await Gender.create({name})
    return res.json(gender)
  }

  async getAll(req, res) {
    const gender = await Gender.findAll()
    return res.json(gender)
  }
}

module.exports = new GenderController()