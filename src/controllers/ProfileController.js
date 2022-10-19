const { Client, Login } = require('../models');

const ProfileController = {
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
        
        // res.json(clientInfo);
        res.render('profile', { clientInfo });
    },

    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("user");
        // res.clearCookie("admin");
        res.redirect("/login");
    }
}

module.exports = ProfileController;