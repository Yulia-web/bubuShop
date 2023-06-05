const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING},
  phone: {type: DataTypes.STRING, unique: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketOfGoods = sequelize.define('basket_of_goods', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Favourite = sequelize.define('favourite', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const FavouriteOfGoods = sequelize.define('favourite_of_goods', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Comparison = sequelize.define('comparison', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ComparisonOfGoods = sequelize.define('comparison_of_goods', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Reviewed = sequelize.define('reviewed', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ReviewedOfGoods = sequelize.define('reviewed_of_goods', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Goods = sequelize.define('goods', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  quantity: {type: DataTypes.INTEGER, allowNull: false},
  code: {type: DataTypes.STRING, unique: true, allowNull: false},
  image: {type: DataTypes.STRING, allowNull: false},
  price: {type: DataTypes.STRING, allowNull: false},
  discount: {type: DataTypes.INTEGER},
  description: {type: DataTypes.STRING, allowNull: false},
  country: {type: DataTypes.STRING, allowNull: false},
  weight: {type: DataTypes.STRING, allowNull: false},
  size: {type: DataTypes.STRING, allowNull: false},
})

const Gender = sequelize.define('gender', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING,unique: true, allowNull: false}
})

const Color = sequelize.define('color', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING,unique: true, allowNull: false}
})

const Producer = sequelize.define('producer', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING,unique: true, allowNull: false}
})

const Categories = sequelize.define('categories', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING,unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false}
})

const ProducerCategories = sequelize.define('producer_categories', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Favourite)
Favourite.belongsTo(User)

User.hasOne(Comparison)
Comparison.belongsTo(User)

User.hasOne(Reviewed)
Reviewed.belongsTo(User)

Basket.hasMany(BasketOfGoods)
BasketOfGoods.belongsTo(Basket)

Favourite.hasMany(FavouriteOfGoods)
FavouriteOfGoods.belongsTo(Favourite)

Comparison.hasMany(ComparisonOfGoods)
ComparisonOfGoods.belongsTo(Comparison)

Reviewed.hasMany(ReviewedOfGoods)
ReviewedOfGoods.belongsTo(Reviewed)

Goods.hasMany(BasketOfGoods)
BasketOfGoods.belongsTo(Goods)

Goods.hasMany(FavouriteOfGoods)
FavouriteOfGoods.belongsTo(Goods)

Goods.hasMany(ComparisonOfGoods)
ComparisonOfGoods.belongsTo(Goods)

Goods.hasMany(ReviewedOfGoods)
ReviewedOfGoods.belongsTo(Goods)

User.hasMany(Rating)
Rating.belongsTo(User)

Goods.hasMany(Gender)
Gender.belongsTo(Goods)

Goods.hasMany(Color)
Color.belongsTo(Goods)

Producer.hasMany(Goods)
Goods.belongsTo(Producer)

Categories.hasMany(Goods)
Goods.belongsTo(Categories)

Producer.belongsToMany(Categories, {through: ProducerCategories})
Categories.belongsToMany(Producer, {through: ProducerCategories})

module.exports = {
  User,
  Basket,
  BasketOfGoods,
  Favourite,
  FavouriteOfGoods,
  Comparison,
  ComparisonOfGoods,
  Rating,
  Gender,
  Color,
  Producer,
  Categories,
  Goods,
  ProducerCategories,
  Reviewed,
  ReviewedOfGoods
}