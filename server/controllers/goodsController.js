const uuid = require('uuid')
const path = require('path')
const {Goods} = require('../modules/modules')
const ApiError = require('../error/ApiError')

class GoodsController {
  async create(req, res, next) {
    try {
      const {name, quantity, code, price, discount, description, country, weight, size, producerId, categoryId} = req.body
      const {image} = req.files
      let fileName = uuid.v4() + ".jpg"
      image.mv(path.resolve(__dirname, '..', 'static', fileName))

      const goods = await Goods.create({name, quantity, code, image: fileName, price, discount, description, country, weight, size, producerId, categoryId})

      return res.json(goods);
    } catch(e) {
      next(ApiError.badRequest(e.message))
    }
  } 

  async getAll(req, res) {
    let {limit, page} = req.query
    page = page || 1
    limit = limit || 32
    let offset = page * limit - limit
    const goods = await Goods.findAndCountAll({limit, offset})
   
    return res.json(goods)
  }

  async getOne(req, res) {
    const {id} = req.params
    const goods = await Goods.findOne({where: {id}})

    return res.json(goods);
  }
}

module.exports = new GoodsController()