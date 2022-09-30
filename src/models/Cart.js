module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_cart: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        id_client: {
            type: DataTypes.INTEGER(10).UNSIGNED
        }
    }

    const config = {
        tableName: 'cart',
        timestamps: false
    }

    const Cart = sequelize.define('Cart', cols, config);
    
    Cart.associate = (models) => {
        Cart.belongsTo(models.Client, {
            foreignKey: 'id_client'
        })
    }

    return Cart;
}