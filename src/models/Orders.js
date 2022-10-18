module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_order: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        order_code: {
            type: DataTypes.STRING(6)
        },

        order_date: {
            type: DataTypes.DATE
        },
        
        id_client: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },

        id_cart: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }
    }

    const config = {
        tableName: 'orders',
        timestamps: false
    }

    const Orders = sequelize.define('Orders', cols, config);
    
    Orders.associate = (models) => {
        Orders.belongsTo(models.Client, { // belongsTo: 1:1
            foreignKey: 'id_client'
        })

        Orders.belongsTo(models.Cart, {
            foreignKey: 'id_cart'
        })
    }

    return Orders;
}