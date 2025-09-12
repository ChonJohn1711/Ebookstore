'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Promotion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // applicable_product_ids
        }
    }
    Promotion.init({
        title: DataTypes.STRING,
        discount_percent: DataTypes.FLOAT,
        start_date: DataTypes.DATE,
        end_date: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Promotion',
    });
    return Promotion;
};