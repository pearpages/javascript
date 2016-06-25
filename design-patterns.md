# Design Patterns

## Object Patterns

### Function Arguments Patterns

- arguments are not required
- are untyped
- unspecifie3d arguments become undefined
- arguments are available through the **arguments** object
  - it's array-like but not really an array

```javascript
function myFunc() {
    var x = 0;
    for (var i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}
```

### Chaining

- useful for creating fluent APIs for working against a mutable object
- designed around returning the sourhce object
- popularized by jQuery

```javascript
jQuery('.foo')
    .addClass('bar')
    .fadeIn('slow')
    .html('Hello World');
```

```javascript
function Calc(start){
    var that = this;
    that.add = function (x) {
        start = start + x;
        return that;
    };

    that.multiply = function (x) {
        start = start * x;
        return that;
    }

    that.equals = function (callback) {
        callback(start);
        return that;
    }
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result) {
        console.log(result);
    });
```

**Summarizing**

- return the object you want to chain
  - the *this* object
  - capture the *this* object if the caller isn't trusted


### Observable Properties

We use the *methods-as-properties*. 

```javascript
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
```

### Observable Property in ES5

[Check Getters and Setters in Objects and prototypes](./objects-and-prototypes.md)

--- 

## Timer Patterns

- setTimeout(callback,period), only once
- setInterval(callback,period), continiously with the delay specified
- minimum time is 4ms
- timers won't start until the outer most function is finished

### Asynchronous Execution Pattern

- browers are typically single threaded
- long-running javascript blocks the UI
- splitting long-running code over setTimeout blocks releases the thread

```javascript
var buffer = function (items, iterFn, callback) {
    var i = 0, len = items.length;

    setTimeout(function () {
        for (var start = +new Date; i < len && result !== false && ( (+new Date) - start < 50); i++) {
            result = iterFn.call(items[i], items[i], i);
        }

        if (i < len && result !== false) {
            setTimeout(arguments.calle,20);
        }else{
            callback(items);
        }
    }, 20);
}
```

### Recursive setTimeout Pattern

Periodically running a pice of functionality, related to a duration (most commonly used to query a data source)

- setInterval ordering is unpredictable across browsers
- recursivel invoking setTimeout can ensure order of execution

```javascript
setTimeout(function getFoo() {
    $.get('/foo', function (result) {
        // do something with the results
        setTimeout(getFoo, 1000);
    });
}, 1000);
```

---

## Asynchonous Module Definitions (AMDs)

JavaScript lacks any way to have external references. Also it is blocking, only one file can be processed at any given time.

**See post on modules**

---

## Pub/Sub Design Pattern

A piece of code will raise an event, N number of pieces will react to it. It allows disconnected communication between functions. 

**See pubsub folder in src**

Pub / Sub can be sued as message bus. A late-bound subscriber will receive all previously published messages. Useful for lazy-loading page components. Improving performance (combine with Asynchronous Execution Pattern).



---

## Promises

---