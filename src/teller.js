const ProductCatalogue = require('./product_catalogue');
const ShoppingCart = require('./shopping_cart');
const Receipt = require('./receipt');

class Teller {

    constructor(catalogue) {
        this._catalogue = catalogue;
    }

    checkOutArticlesFrom(cart) {
        return new Receipt();
    }
}

module.exports = Teller;
