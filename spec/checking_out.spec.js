const expect = require('./expect');
const { ProductCatalogue, ShoppingCart, Teller } = require('../src');

describe('When checking out articles at the supermarket', () => {

    describe('An empty shopping cart', () => {

        it('should cost nothing', () => {
            const
                catalogue = new ProductCatalogue(),
                teller    = new Teller(catalogue),
                cart      = new ShoppingCart();

            const receipt = teller.checkOutArticlesFrom(cart);

            expect(receipt.totalPrice()).to.equal(0);
        });
    })
});
