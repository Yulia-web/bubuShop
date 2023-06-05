const { Basket, BasketOfGoods, Goods } = require('../modules/modules'); 

class BasketController {
  async create(req, res) {
    const {basketId, goodId} = req.body

    try {
      const basket = await Basket.findByPk(basketId);
      if (!basket) {
        throw new Error('Корзина не знайдена');
      }

      const goods = await Goods.findByPk(goodId);
      if (!goods) {
        throw new Error('Товар не знайдений');
      }
  
      const basket_of_goods = await BasketOfGoods.create({
        basketId: basketId,
        goodId: goodId
      });
  
      return res.json(basket_of_goods);
    } catch (error) {
      console.error('Сталася помилка при додаванні товару до корзини:', error.message);
    }
  }

  async getAll(req, res) {
    const basket_of_goods = await BasketOfGoods.findAll()
    return res.json(basket_of_goods)
  }

  async delete(req, res) {
    const {basketId, goodId} = req.body

    const item = await BasketOfGoods.destroy({where: {basketId: basketId, goodId: goodId}});

    return res.json(item);
  }
}

module.exports = new BasketController()