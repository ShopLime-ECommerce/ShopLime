const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database')
const User = require('./user')

class Order extends Model {}

Order.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		itemId: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM({
				values: ['pending', 'fulfilled'],
			}),
		},
	},
	{
		sequelize, // We need to pass the connection instance
		modelName: 'order', // We need to choose the model name
	}
)

Order.belongsTo(User)

module.exports = Order
