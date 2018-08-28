function Till (items, basket) {
    this.items = items;
    this.basket = basket;
  };

  //creating my own methods scan, addToBasket, totalPrice & removeFromBasket

Till.prototype.scan = function (barcode) {
    return this.items.find((items) => {
      return items.barcode === barcode;
    });
  };

Till.prototype.addToBasket = function (items) {
  return this.basket.push (items);
  };

//Add totals to the basket using reduce. 
//reduce method uses an accumulator to reduce all items in an array to a single value
Till.prototype.totalPrice = function () {
    return this.basket.reduce((total, items) => {
      return total + items.price;
    }, 0);
  };

//
  Till.prototype.removeFromBasket = function (barcode) {
    const items = this.scan(barcode);
    const index = this.basket.indexOf(items);
    this.basket.splice(index, 1);
  };
  

  
module.exports = Till;
  
