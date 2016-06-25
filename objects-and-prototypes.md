# Obejcts and Prototypes

It is very useful to use ```'strict mode'```.

## Object Literals

[see basics](./basics.md)

## Using Constructor Functions

```javascript
'use strict';

function Cat(name,color) {
    this.name = name;
    this.color = color;
}

var cat = new Cat();
```

## Object.create

```javascript
var cat = Object.create(Object.prototype, {
    name: {
        value: 'Fluffy',
        enumerable: true,
        writable: true,
        configurable: true
    },
    color: {
        value: 'White',
        enumerable: true,
        writable: true,
        configurable: true
    }
});
```

## ES6 Constructors

```javascript
'use strict';

class Cat{
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    speak() {
        console.log('Meeooow');
    }
}

var cat = new Cat
```