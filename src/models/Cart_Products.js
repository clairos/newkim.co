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
        }
    }

    const config = {
        tableName: 'cart_products',
        timestamps: false
    }

    const Cart_Products = sequelize.define('Cart_Products', cols, config);
    
    Cart_Products.associate = (models) => {
        Cart_Products.belongsToMany(models.Products, { // belongsToMany pq tem varios produtos
            foreignKey: 'id_product',
            outerKey: 'id_product',
            through: 'cart_products'
        })
    }

    return Cart_Products;
}