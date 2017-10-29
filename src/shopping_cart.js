const Product = require('./product');

class ShoppingCart {
    constructor() {
        this._products = [];
    }

    add(product) {
        this._products.push(product)

        return this;
    }
}

module.exports = ShoppingCart;