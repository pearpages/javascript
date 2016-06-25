'use strict';

var arr = ['red','blue','green'];

Object.defineProperty(arr, 'last', {
    get: function() {
        return this[this.length-1]
    }
});

console.log(arr.last); // green

var arr2 = ['one','two','three'];
console.log(arr2.last); // undefined

Object.defineProperty(Array.prototype, 'last', {
    get: function() {
        return this[this.length-1]
    }
});

console.log(arr2.last);

//*************************

function Cat(name, color) {
    this.name = name;
    this.color = color;
}

Cat.prototype.age = 3;

var fluffy = new Cat('Fluffy','white');
var muffin = new Cat('Muffin', 'brown');

fluffy.age = 5;

console.log(fluffy.age);
console.log(fluffy.__proto__.age);
console.log(muffin.age);