// import models
const Product = require("./product.js");
const Category = require("./category.js");
const Tag = require("./tag.js");
const ProductTag = require("./productTag.js");
// const sequelize = require("../config/connection.js");

// sequelize associations

// Products belongsTo Category
// B.belongsTo(A);
Product.belongsTo(Category, {
  foreignKey: "category_id",
});
// Categories have many Products
// A.hasMany(B);
Category.hasMany(Product, {
  foreignKey: "category_id",
});
// Products belongToMany Tags (through ProductTag)
// B.belongsToMany(D, { through: C });
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
});
// Tags belongToMany Products (through ProductTag)
// D.belongsToMany(B, { through: C });
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
});

module.exports = { Product, Category, Tag, ProductTag };
