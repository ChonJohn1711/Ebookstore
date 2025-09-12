'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // order_id: DataTypes.STRING,
            // product_id: DataTypes.STRING,
        }
    }
    OrderDetail.init({
        quantity: DataTypes.INTEGER,
        unit_price: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'OrderDetail',
    });
    return OrderDetail;
};