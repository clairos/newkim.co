module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_product: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        product_name: {
            type: DataTypes.STRING(50)
        },

        price: {
            type: DataTypes.DECIMAL(12,2).UNSIGNED
        },

        color: {
            type: DataTypes.STRING(30)
        },

        image: {
            type: DataTypes.STRING(50)
        },

        image_model: {
            type: DataTypes.STRING(50)
        },

        image_detail: {
            type: DataTypes.STRING(50)
        },

        image_alt: {
            type: DataTypes.STRING(100)
        },

        collection: {
            type: DataTypes.STRING(30)
        },

        display_home: {
            type: DataTypes.TINYINT
        },

        category: {
            type: DataTypes.STRING(20)
        }
    }
    
    const config = {
        tableName: 'products',
        timestamps: false
    }

    const Products = sequelize.define('Products', cols, config);

    Products.associate = (models) => {
        Products.hasMany(models.Cart_Products, {
            foreignKey: 'id_product'
        })

        Products.hasMany(models.Order_Products, {
            foreignKey: 'id_product'
        })
    }

    return Products;
}