const fs = require('fs');
const path = require('path');
const register = require('../data/register.json');

const usersJSONPath = path.join('../data/users.json');

module.exports = {
    store (register){
        if(!register.FullName && !register.email && !register.password && !register.country && !register.adressLine && !register.suburb && !register.state && !register.postcode && !register.phone) return

        usersJSONPath.id = usersData.length + 1;
        registerData.push(register);
        fs.writeFileSync(usersJSONPath, JSON.stringify(usersData));
        return usersJSONPath;
    }
}