'use strict';
var cat = {
    name: {first: 'Fluffy', last: 'LaBeouf'},
    color: 'white'
}

Object.defineProperty(cat,'name',{writable: false});
Object.freeze(cat.name);
cat.name.first = 'Whatever'; // Yes, it can be modified, because it is the object inside


// but if we use 
