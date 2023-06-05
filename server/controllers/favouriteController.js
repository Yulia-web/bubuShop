const { Favourite, FavouriteOfGoods, Goods } = require('../modules/modules'); 

class FavouriteController {
  async create(req, res) {
    const {favouriteId, goodId} = req.body

    try {
      const favourite = await Favourite.findByPk(favouriteId);
      if (!favourite) {
        throw new Error('Корзина не знайдена');
      }

      const goods = await Goods.findByPk(goodId);
      if (!goods) {
        throw new Error('Товар не знайдений');
      }
  
      const favourite_of_goods = await FavouriteOfGoods.create({
        favouriteId: favouriteId,
        goodId: goodId
      });
  
      return res.json(favourite_of_goods);
    } catch (error) {
      console.error('Сталася помилка при додаванні товару до корзини:', error.message);
    }
  }

  async getAll(req, res) {
    const favourite_of_goods = await FavouriteOfGoods.findAll()
    return res.json(favourite_of_goods)
  }

  async delete(req, res) {
    const {favouriteId, goodId} = req.body

    const item = await FavouriteOfGoods.destroy({where: {favouriteId: favouriteId, goodId: goodId}});

    return res.json(item);
  }
}

module.exports = new FavouriteController()