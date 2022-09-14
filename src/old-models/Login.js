const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');


module.exports =  {
        find (receivedEmail) {
            return usersData.find(user => user.email == receivedEmail);
        },
    
        comparePassword (password1, password2) {
            return bcryptjs.compareSync(password1, password2);
        }

}