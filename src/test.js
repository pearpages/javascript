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

var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'White'
}

Object.defineProperty(cat, 'fullName', {
    get: function() {
        return this.name.first + ' ' + this.name.last
    },
    set: function(value) {
        var nameParts = value.split(' ');
        this.name.first = nameParts[0]
        this.name.last = nameParts[1]
    }
});

cat.fullName = 'Muffin Top';
console.log(cat.fullName);
console.log(cat.name.first);
console.log(cat.name.last);