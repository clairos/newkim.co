const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const register = require('../data/register.json');

const usersJSONPath = path.join(__dirname, '../data/users.json');

module.exports = {
    store (register){
        if(!register.FullName && !register.email && !register.password && !register.country && !register.adressLine && !register.suburb && !register.state && !register.postcode && !register.phone) return

        user.id = register.length + 1;
        user.re_password = bcryptjs.hashSync(register.password, 10);
        usersData.push(register);
        fs.writeFileSync(usersJSONPath, JSON.stringify(register));

        return register;
    }
}