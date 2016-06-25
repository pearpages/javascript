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

## Looping an Object

```javascript
'use strict';

var cat = {
    name: 'Mark',
    color: 'brown',
    meow: function () {
        console.log('meeeeeow!');
    }
}

for (var propertyName in cat) {
    console.log(propertyName);
}
// otuputs: 'name', 'color', 'meow'

for (var value of cat) {
    console.log(value);
}
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

- ```Object.keys()``` Will show also methods in array format ['property1','property2','method1',...]
- ```Object.defineProperty()``` 
- ```JSON.stringify()``` Won't show methods only properties

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}

Object.defineProperty(cat, 'name', {enumerable: false});

for (var propertyName in cat) {
    console.log(propertyName);
}

// logs only 'name' because *color* is not enumerable

console.log(Object.keys(cat)); // logs only 'name' because *color* is not enumerable
```

### Configurable

Once you make an opbject not configurable you can't make it configurable again.

```javascript
'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white'
}

Object.defineProperty(cat, 'name', {configurable: false});
delete(cat.name); // cannot delete property
Object.defineProperty(cat, 'name', {configurable: true}); // ERROR!!
Object.defineProperty(cat, 'name', {enumerable: true}); // ERROR!!
Object.defineProperty(cat, 'name', {writable: true}); // works.
delete(cat.name); // we can delete it now
```

## Getters and Setters

```javascript
'use strict';

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParts = value.split(' ')
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
});

cat.fullName = 'Muffin Top';
console.log(cat.fullName);
console.log(cat.name.first);
console.log(cat.name.last);
```

