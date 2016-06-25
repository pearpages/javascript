'use strict';

var cat = {
    name: 'Fluffy',
    color: 'white',
    meow: function () {
        console.log('meoooow!!');
    }
}

Object.defineProperty(cat, 'name', {enumerable: false});

for (var propertyName in cat) {
    console.log(propertyName);
}

console.log(Object.keys(cat));

console.log(JSON.stringify(cat));