# Prototypes and Inheritance

**Object.defineProperty**

```javascript
'use strict';

var arr = ['red','blue','green'];

Object.defineProperty(arr, 'last' {
    get: function() {
        return this[this.length-1]
    }
});

console.log(arr.last); // green

var arr2 = ['one','two','three'];
console.log(arr2.last); // undefined
```

If we want it to be part of the array objects, than we have to use the prototype

```javascript
Object.defineProperty(Array.prototype, 'last', {
    get: function() {
        return this[this.length-1]
    }
});

console.log(arr2.last); // three
```

## What is a Prototype

> **A fucntion's prototype:** is the object **instance** that will become the prototype for all objects created using this function as a constructor.

> **An object's prototype:** is the object **instance** from which the object is inherited.

```javascript
function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;

var fluffy = new Cat('Fluffy','white');
var muffin = new Cat('Muffin', 'brown');

console.log(fluffy.age); // 3

fluffy.age = 5;

console.log(fluffy.age); // 5
console.log(fluffy.__proto__.age); // 3
console.log(muffin.age); // 3

console.log(Object.keys(muffin)); // ['name','color']
console.log(Object.hasOwnProperty('age')); // false

Cat.prototype.age = 100;
console.log(fluffy.age); // 5;
console.log(muffin.age); // 100;
```