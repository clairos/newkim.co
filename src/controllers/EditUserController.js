const { Client, Login } = require('../models');

const EditUserController = {
    index: async (req, res) => {
        const email = req.cookies.user.email;
        const client = await Login.findOne({
            where: {
                email: email,
            }
        })

        if (!client) {
            res.redirect('/login');
        }

        const clientInfo = await Client.findOne();

        res.render('editUser', { clientInfo });
    },

    update: async (req, res) => {
        const id = req.params.id;
        const { profile_name,
                email,
                password,
                country,
                shipping_first_name,
                shipping_last_name,
                address_line1,
                address_line2,
                suburb_city,
                state_territory,
                postcode,
                phone } = req.body;

        await Client.update(
            {
                profile_name,
                email,
                password,
                country,
                shipping_first_name,
                shipping_last_name,
                address_line1,
                address_line2,
                suburb_city,
                state_territory,
                postcode,
                phone
            },
            {
                where: { id_client: id }
            }
        )

        const clientInfo = await Client.findOne();

        res.redirect('/profile', { clientInfo });
    },
}

module.exports = EditUserController;