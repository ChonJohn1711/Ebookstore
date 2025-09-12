'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // user_id: DataTypes.STRING,
        }
    }
    Order.init({
        order_date: DataTypes.DATE,
        status: DataTypes.STRING,
        total_amount: DataTypes.INTEGER,
        shipping_address: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};