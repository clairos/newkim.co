const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const logado = require('../data/login.json');


module.exports =  {
        find (receivedEmail) {
            return usersData.find(user => user.email == receivedEmail);
        },
    
        comparePassword (password1, password2) {
            return bcryptjs.compareSync(password1, password2);
        }

}