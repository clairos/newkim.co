module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_cart_products: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        id_product: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },

        id_cart: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }, 

        quantity: {
            type: DataTypes.INTEGER(10).UNSIGNED
        },

        size: {
            type: DataTypes.INTEGER(2).UNSIGNED
        }
    }

    const config = {
        tableName: 'cart_products',
        timestamps: false,
        createdAt: false,
        updatedAt: false
    }

    const Cart_Products = sequelize.define('Cart_Products', cols, config);
    
    Cart_Products.associate = (models) => {
        Cart_Products.belongsTo(models.Products, { // belongsToMany pq tem varios produtos
            foreignKey: 'id_product',
            as: 'product'
            //outerKey: 'id_cart',
            //through: 'cart_products'
        })
    }

    return Cart_Products;
}