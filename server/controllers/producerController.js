const {Producer} = require('../modules/modules')

class ProducerController {
  async create(req, res) {
    const {name} = req.body
    const producer = await Producer.create({name})
    return res.json(producer);
  }

  async getAll(req, res) {
    const producer = await Producer.findAll()
    return res.json(producer)
  }
}

module.exports = new ProducerController()