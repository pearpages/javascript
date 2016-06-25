function Book (name, price) {
    var priceChanging = [],
        priceChanged = [];

    var that = this;
    that.name = function () {
        return name;
    }
    that.price = function (val) {
        if (val !== undefined && val != price) {
            // all the conditions must pass
            for(var i in priceChanging) {
                if(!priceChanging[i](that,val)) {
                    return price;
                }
            }
            price = val;
            for(var i in priceChanged) {
                priceChanged[i](that);
            }
        }
        return price;
    }
    that.onPriceChanging = function (callback) {
        priceChanging.push(callback);
    }
    that.onPriceChanged = function (callback) {
        priceChanged.push(callback);
    }
}

var book = new Book('Javacript: The Good Parts', 23.99);

console.log('The name is: ' + book.name());
console.log('The price is: $' + book.price());

book.onPriceChanging(function (b,price) {
    if( price > 100) {
        console.log('Sytem error, price has gone unexpectly high');
        return false;
    }
    return true;
})

book.onPriceChanged(function (b) {
    console.log('The book price has changed to: $' + b.price());
});

book.price(19.99);
book.price(200);