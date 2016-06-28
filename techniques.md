# Advanced Techniques

## Introduction

## Taditional Javascript Functions

```javascript
function myFunction(text) {} // global function
myFunction = function (text) {}; // global function
var myFunction = function (text) {}; // local function
var myObject = {myFunction: function(text)}; // local namespace
myObject = {myFunction: function(text)}; // global namespace
```

```javascript
// example with jQuery
$(function () // document ready, shorthand for $(document).ready(function () {});
{
    var div1 = $('#div1'),
        div2 = $('#div2');

        function1 = function () { // global function
            div1.append('function 1 executed <br/>');
        }
        var function2 = function () { // local 'function'
            div1.append('function2 executed <br/>');
        };
        var obj = { // local 'namespace'
            function3: function () {
                div1.append('function 3 executed <br/>');
            }
        };
        gobj = { // global 'namespace'
            function4: function () {
                div1.append('function4 executed <br/>');
            }
        };

        div2.load('anotherFile.html'); // any javascript inside the html will be executed too
        // anotherFile.html calls function1(), function2(), obj.function3() and gobj.function4()
        // function2() and function3() are not found because they are not global
});
```

### Draw Example

```html
<style>
    #the Canvas {
        background-image: -moz-radial-gradient(30px 30px, #FFF, #EEF);
    }
</style>
<canvas id="theCanvas">
    Attention! Your browser does not support the Canvas.
</canvas>
```

```javascript
// global 'namespace'
_KSM = {
    draw: function () {
        // Draw something on the canvas
        var canvas = document.getElementById('theCanvas');
        if (canvas.getContext) {
            var context = canvas.getContext('2d');
            context.strokeStyle = 'black';
            context.fillStyle = 'silver';
            context.fillRect(10,10,100,100);
            context.strokeRet(10,10,100,100);
        }
    }
}
_KSM.draw();
```

---

## Event Handling

---

## Avanced Event Handling

---

## Using jQuery Deferred Objects

---