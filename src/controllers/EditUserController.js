const { Client, Login } = require('../models');

const EditUserController = {
    index: async (req, res) => {
        const email = req.cookies.user.email;
        const client = await Login.findOne({
            where: {
                email: email,
            }
        })
        
        if (!client){
            res.redirect('/login');
        }

        const clientInfo = await Client.findOne();
        
        res.render('editUser', { clientInfo });
    }
}

module.exports = EditUserController;