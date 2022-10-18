module.exports = (sequelize, DataTypes) => {
    const cols = {
        id_client: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        profile_name: {
            type: DataTypes.STRING(100)
        },

        email: {
            type: DataTypes.STRING(50)
        },

        password: {
            type: DataTypes.STRING(100)
        },

        country: {
            type: DataTypes.STRING(20)
        },

        shipping_first_name: {
            type: DataTypes.STRING(50)
        },

        shipping_last_name: {
            type: DataTypes.STRING(50)
        },

        address_line1: {
            type: DataTypes.STRING(100)
        },

        address_line2: {
            type: DataTypes.STRING(100)
        },

        suburb_city: {
            type: DataTypes.STRING(100)
        },

        state_territory: {
            type: DataTypes.STRING(50)
        },

        postcode: {
            type: DataTypes.STRING(15)
        },

        phone: {
            type: DataTypes.STRING(30)
        },

        administrator: {
            type: DataTypes.TINYINT,
            default: 0
        }
    }

    const config = {
        tableName: 'clients',
        timestamps: false
    }

    const Client = sequelize.define('Client', cols, config);

    Client.associate = (models) => {
        Client.hasMany(models.Cart, {
            foreignKey: 'id_client'
        })
        
        Client.hasMany(models.Orders, {
            foreignKey: 'id_client'
        })
    }

    return Client;
}