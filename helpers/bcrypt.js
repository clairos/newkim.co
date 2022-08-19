const { compareSync, hashSync } = require('bcrypt');
const bycrpt = { 
    generateHash: (pass) => {
        return hashSync(pass, 10);
    },
    compareSync: (pass, hash) => {
        return compareSync(pass, hash);
    }
}

module.exports = bycrpt