const {Categories} = require('../modules/modules')

class CategoriesController {
  async create(req, res) {
    const {name} = req.body
    const category = await Categories.create({name})
    return res.json(category);
  }

  async getAll(req, res) {
    const categories = await Categories.findAll()
    return res.json(categories)
  }
}

module.exports = new CategoriesController()