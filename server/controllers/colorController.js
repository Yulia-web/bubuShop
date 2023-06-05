const {Color} = require('../modules/modules')

class ColorController {
  async create(req, res) {
    const {name} = req.body
    const color = await Color.create({name})
    return res.json(color)
  }

  async getAll(req, res) {
    const color = await Color.findAll()
    return res.json(color)
  }
}

module.exports = new ColorController()