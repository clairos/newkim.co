module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_order_product: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        quantity: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },
        
        id_product: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },

        id_order: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }
    }

    const config = {
        tableName: 'order_products',
        timestamps: false
    }

    const Order_Products = sequelize.define('Order_Products', cols, config);
    
    Order_Products.associate = (models) => {
        Order_Products.belongsToMany(models.Products, { // belongsToMany: 1:N
            foreignKey: 'id_products',
            outerKey: 'id_product',
            through: 'order_products'
        })

        Order_Products.belongsTo(models.Orders, {
            foreignKey: 'id_order'
        })
    }

    return Order_Products;
}