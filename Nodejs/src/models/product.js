'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // category_id: DataTypes.DATE,
            // brand_id: DataTypes.DATE,
        }
    }
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        stock_quantity: DataTypes.INTEGER,
        warranty_months: DataTypes.INTEGER,
        image_url: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};