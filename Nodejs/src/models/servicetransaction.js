'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class ServiceTransaction extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // name: DataTypes.STRING,
            // name: DataTypes.STRING,
        }
    }
    ServiceTransaction.init({
        transaction_date: DataTypes.DATE,
        amount: DataTypes.INTEGER,
        details: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'ServiceTransaction',
    });
    return ServiceTransaction;
};