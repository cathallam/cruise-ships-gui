const Till = require('../src/till');

const apple = {
    barcode: 123,
    price: 5,
  };
  
  const banana = {
    barcode: 456,
    price: 6
  };

  const orange = {
    barcode: 789,
    price: 7,
  };
  
  const pineapple = {
    barcode: 5367,
    price: 80,
  };

  const kiwi = {
    barcode: 765,
    price: 25,
  };

  const items = [
    apple,
    banana,
    orange,
    pineapple,
    kiwi, 
  ];
  //Create a new till with a list of products in an empty array

  describe('constructor', () => {
    const till = new Till(items, []);
    it('returns an object', () => {
        expect(till).toBeInstanceOf(Object);
      });

      it('has initial products array', () => {
        expect(till.items).toEqual(expect.arrayContaining(items));
      });

      it('has initial basket array', () => {
        expect(till.basket).toEqual(expect.arrayContaining([]));
      });

      it('has initial transactions array', () => {
        expect(till.transactions).toEqual(expect.arrayContaining([]));
      });
    });

    //scan the product barcode

describe('scan', () => {
        const till = new Till(items, []);
    it('finds an item by its barcode', () => {
          expect(till.scan(456)).toEqual(banana);
        });
      });
// add item to basket
describe('addToBasket', () => {
    it('adds an item to the basket', () => {
          const till = new Till(items, []);
        
          till.addToBasket(kiwi);
        expect(till.basket).toContain(kiwi);
        });
      });

//get total price
describe('totalPrice', () => {
     it('gets the total price of items in the basket', () => {
          const basket = [orange, orange, pineapple];
          const till = new Till(items, basket);
        
        expect(till.totalPrice()).toEqual(94);
        });
      });

//remove items from the basket
describe('removeFromBasket', () => {
    it('removes the item with the given barcode from the basket', () => {
          const basket = [kiwi, orange, pineapple];
          const till = new Till(items, basket);
        
          till.removeFromBasket(789);
        
        expect(till.basket).not.toContain(orange);
        });
      });

 


//old sample code
test('scan finds an item by its barcode', () => {
    expect(scan(456, items)).toEqual(banana);
  });

  test('addToBasket adds an item to the basket', () => {
    const basket = [];
  
    addToBasket(kiwi, basket);
  
    expect(basket).toContain(kiwi);
  });
  
  test('totalPrice gets the total price of items in the basket', () => {
    const basket = [orange, orange, pineapple];
  
    expect(totalPrice(basket)).toEqual(94);
  });
  
  test('removeFromBasket removes the item with the given barcode from the basket', () => {
    const basket = [kiwi, orange, pineapple];
  
    removeFromBasket(789, basket);
  
    expect(basket).not.toContain(orange);
  });