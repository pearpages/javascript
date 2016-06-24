# Javascript

[You Don't Know JS (book series](https://github.com/getify/You-Dont-Know-JS/blob/master/README.md#you-dont-know-js-book-series)

## Introduction

Source code is not for the computer, is for the developer. It is for you ando ther members of your team so you all can understand it. It is better to write the code for the perspective of the developer than the program itself. The source code is for developers.

```javascript
a = b * 2 + foo(c * 3);

// just for the sake of readibility
a = (b * 2) + foo(c * 3);
```

```javascript
a = b + 2 * foo(c * 3);

// just for the sake of readibility
a = b + (2 * foo(c * 3));
```

### Compiled more than Interpreted

That's the reason why javascript has concepts like *hoisting*.

## Syntax

```javascript
a = a + 2;
// vs
a += 2;
```

### Values and Types

```javascript
"42"[0]; // 4
'345'[2]; // 5 
```

```javascript
// implicit conercion
var a = 42;
a = String(42);
var b = Number(a);
```

```javascript
// explicit coercion
var a = 42;
a = a / 2;
a = a + = ""; // "21"
```

#### Primitive Data Types

- String
- Number
- Boolean
- Null
- Undefined

```javascript
typeof(100/2); // "number"
typeof([]); // "object"
var a,b;
typeof(a+b) // "number"
```

```javascript
Math.random(); // values between 0 and 1.
Math.round(10.5); // 11
Math.round(10.4); // 10
Math.ceil(10.4); // 11
Math.floor(10.9); // 10;
```

### Comments

You should not say **what**, but **how** or **why**.

### Input / Output

- alert
- prompt
- confirm

### Variables and Blocks

```javascript
var b;

{
    // this is a block
    var a = 42;
    foo (a / 2);
}

var c;
```

### Conditionals

```javascript
if (a) {
    // a has to be converted to get true or false
}
```

#### falsy

- 0
- -0
- NaN
- ""
- false
- null
- undefined

#### truethy

Anything that is not falsy is truethy.

#### Switch

```javascript
switch (option) {
    case "car":
    alert("car");
    break;
    case "home";
    alert("home");
    break;
    default:
    alert("whatever");
    break;
}
```

### Loops

 - for
 - while
 - do while

A loop runs until the condition turns into false or I can use the **break** statetment.

The following are optional:

1. initialization
2. test
3. update

```javascript
for (;;) {} // runs forever
```

```javascript
a = 5;
while (true) {
    if (a > 10) {
        break;
    }
    console.log(a);
    a = a + 1;
}
// exists through break
// a = 10;
```

### Functions

Parameters when you declare them, arguments when you pass them.

```javascript
function printAmount(x) {
    console.log( x.toFixed(2) );
}

var amount = 99.99;

printAmount(amount); // "99.99"
printAmount(amount * 2); // "199.98"
console.log(amount); // 99.99
```

### Arrays

```javascript
var friends = ["Mark", "Lisa", "Denny"];
friends.length; // 3
friends[0]; // "Mark"
friends.push("Peter"); // returns 4, the array now is ["Mark", "Lisa", "Denny", "Peter"] 
friends.pop(); // returns "Peter", the array now is ["Mark", "Lisa", "Denny"]
var newGroupOfFriends = array.slice(0,2); // returns ["Mark", "Lisa"], friends stays the same
console.log(friends); // ["Mark", "Lisa", "Denny"]
```

#### looping over an Array

```javascript
var friends = ["Mark", "Lisa", "Denny", "Peter", "John", "Bjorn"];
for(var i = 0; i<friends.length; i++) {
    console.log(friends[i]);
}

// functional approach
friends.forEach(function(friend) {console.log(friend)});
```

### Scope

We can always refer to variables that are in the outside of a function, but no the opposite.

### Objects

- literals
- prototyped objects through function constructors

We also have

- host objects
  - Document
  - Window
  - Element
  - Event
  - Node
  - Comment
  - Console
- core objects
  - Math
  - Object
  - String
  - Boolean
  - Array
  - Date
  - Number
- objects defined by the code's author

#### Literal

```javascript
var coffee = {
    flavor: 'espresso',
    tempertature: 'piping hot',
    ounces: 100,
    milk: true,
    reheat: function () {
        if(coffee.temperature === 'cold') {
            coffee.temperature = 'piping hot';
            console.log('Your coffee has been reheated!');
        }
    }
}

coffee.temperature = 'cold';
coffee.reheat();
coffee['temperature'] = 'cold';
coffee.reheat();
```

#### Function Constructor

```javascript
function Coffee() {
    this.flavor;
    this.temperature;
    this.ounces;
    this.milk;

    // not the best solution for object methods
    /*
    var self = this;
    this.reheat = function () {
        if(self.temperature === 'cold') {
            coffee.temperature = 'piping hot';
            console.log('Your coffee has been reheated!');
        }
    }
    */
}

// if you put the function as part of the prototype than it's easier to iterate over the object
Coffee.prototype.reheat = function () {
    if(self.temperature === 'cold') {
        coffee.temperature = 'piping hot';
        console.log('Your coffee has been reheated!');
    }
};

var myCoffee = new Coffee();

console.log(typeof(myCoffee)); // object
console.log(myCoffee instanceof Coffee); // true
```

