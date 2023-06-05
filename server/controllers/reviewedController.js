const { Reviewed, ReviewedOfGoods, Goods } = require('../modules/modules'); 

class ReviewedController {
  async create(req, res) {
    const {reviewedId, goodId} = req.body

    try {
      const reviewed = await Reviewed.findByPk(reviewedId);
      if (!reviewed) {
        throw new Error('Корзина не знайдена');
      }

      const goods = await Goods.findByPk(goodId);
      if (!goods) {
        throw new Error('Товар не знайдений');
      }
  
      const reviewed_of_goods = await ReviewedOfGoods.create({
        reviewedId: reviewedId,
        goodId: goodId
      });
  
      return res.json(reviewed_of_goods);
    } catch (error) {
      console.error('Сталася помилка при додаванні товару до корзини:', error.message);
    }
  }

  async getAll(req, res) {
    const reviewed_of_goods = await ReviewedOfGoods.findAll()
    return res.json(reviewed_of_goods)
  }

  async delete(req, res) {
    const {reviewedId, goodId} = req.body

    const item = await ReviewedOfGoods.destroy({where: {reviewedId: reviewedId, goodId: goodId}});

    return res.json(item);
  }
}

module.exports = new ReviewedController()