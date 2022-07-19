const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const Products = {
    findAll(){
        return JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    },

    findOne(id) {
        return this.findAll().find(item => item.id == id);
    }
}

module.exports = Products;