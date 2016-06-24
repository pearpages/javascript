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

### Comments

You should not say **what**, but **how** or **why**.

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

### Loops

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

```javascript
function printAmount(amount) {
    console.log( amount.toFixed(2) );
}

var amount = 99.99;

printAmount(amount); // "99.99"
printAmount(amount * 2); // "199.98"
console.log(amount); // 99.99
```