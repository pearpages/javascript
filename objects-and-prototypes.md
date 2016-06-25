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

## Bracket Notation

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}

console.log(cat['name']); // 'Fluffy'
console.log(cat['color']); // 'white'
```

## Property Descriptor

**getOwnPropertyDescriptor**

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}

console.log(Object.getOwnPropertyDescriptor(cat,'name'));
```

## Define Properties

**defineProperty**

### Writable

It is very important to remember **Object.freeze**.

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}

Object.defineProperty(cat,'name',{writable: false});
cat.name = 'John'; // TypeError: Cannot assign to read only property 'name'

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'white'
}

Object.defineProperty(cat,'name',{writable: false});
cat.name.first = 'Whatever'; // Yes, it can be modified, because it is the object inside
cat.name = 'John'; // TypeError: Cannot assign to read only property 'name'

// but if we use 
Object.freeze(cat.name);
cat.name.first = 'Whatever'; // Cannot assign to read only property 'first' of #Object
```

### Enumerable

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}
```

### Configurable

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}
```

## Getters and Setters

## Prototypes and Inheritance

