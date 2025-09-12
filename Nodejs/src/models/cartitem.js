'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CartItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // cart_id: DataTypes.STRING,
            // product_id: DataTypes.STRING,
        }
    }
    CartItem.init({
        quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'CartItem',
    });
    return CartItem;
};