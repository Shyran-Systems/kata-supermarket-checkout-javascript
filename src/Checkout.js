const { Receipt } = require('./Receipt');

class Checkout {
    constructor(catalogue) {
        this.catalogue = catalogue;
    }

    scan(products) {
        const receipt = new Receipt();

        // todo: calculate the prices, produce a receipt

        return receipt;
    }
}

module.exports = {
    Checkout,
};
