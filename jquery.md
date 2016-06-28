# jQuery

## Introduction

```javascript
// adding the class
document.getElementsByTagName('h2')[0].className += ' highlight';

// removing the class
var classNames = document.getElementsByTagName('h2')[0].className.split(' ');
classNames.splice(classNames.indexOf('highlight'),1);
document.getElementsByTagName('h2')[0].className = classNames.join(' ');
```

vs

```javascript
$('h2').eq(0).addClass('highlight');
$('h2').eq(0).removeClass('highlight');
```

---

## Anatomy of a jQuery Command

```javascript
window.jQuery = window.$ = jQuery;

// jQuery, ready function
$(function () {
    console.log('hello world');
});
```

### Thinking in Sets

```javascript
var divs = $('divs'); // this is an array of elements
divs.length; // how many items
```

```javascript
var nomatch = $('nomatch'); // []
nomatch.length; // 0
```

```javascript
$('h2').text('blah blah'); // all *h2* changed
$('li').text('item'); // all *li* changed
```

---

## Finding Parts of a Page

```javascript
// following the path to our target...
$('html body div div div#house-detail div.logo a img')
```

### CSS3 Selectors

```javascript
$('#content-container')
$('.title')
$('a:hover') // pseudo-class
```

```javascript
var buttons = $('button');
var saveButton = $('#save-button');
var styledButtons = $('.btn');
var specialFeature = $('#special-features li:first-child');
var webLinks = $('a[href^="http://"]');
```

```javascript
var div = $('<div></div>');
var elements = $(['<span>one</span>','<span>two</span>']);
```

```javascript
$(document.getElementById('house-detail'));
$([document.querySelector('h2'),document.querySelector('h3')]);
```

```javascript
var primary = $('.col-sm-5').find('button[class="button-primary"]');
```

```javascript
var parents = $('tbody').parents();
var table = $('tbody').parents('table');
```

```javascript
var children = $('tbody').children();   
```

---

## Adding Style and Effects

```javascript
$('h2').attr('style','background-color: #ff3');
```

```javascript
var bg = $('h2').css('background-color');
$('h2').css({ backgroundColor: '#f60'});
var bg2 = $('h2').css('backgroundColor'); // also works with camelCase
```

```javascript
$('h2').addClass('highlight');
$('h2').removeClass('highlight');
$('h2').addClass(function () {
    return 'bordered';
});
$('h2').removeClass(function () {
    return 'bordered';
});
```

```javascript
$('h2').hide();
$('h2').show();
$('h2').toggle();
```

```javascript
$('h2').fadeOut();
$('h2').fadeIn();
$('h2').fadeIn('fast');
$('h2').fadeIn(function() {
    $('#special-features').addClass('highlight');
});
```

---

## When Events Happen

Examples are 'page load', 'key pressed', 'button clicked', 'form submitted', 'window scrolled', 'element focused', ...

```javascript
// ready

$(document).ready(function () {
    console.log('the page is ready');
});
// or
$(function() {
    console.log('the page is ready');
});
```

```javascript
// on and off

$('#save-button').on('click', function(
    console.log('the save button is clicked');
));

$('#save-button').off('click');
```

```javascript
// calling the callback only once for the even
$('#save-button').one('click', function () {
    console.log('the save button is clicked');
});
```

```javascript
$('#save-button').click(function () {
    console.log('clicked');
});

$('#save-button').blur(function () {
    console.log('no more love');
});
```

---

## Chaining

```javascript
$('#special-features').width('50%')
    .height('200px')
    .addClass('higlight bordered');
```

```javascript
$('#special-features').width('50%')
    .height('200px')
    .addClass('higlight bordered')
    .each(function (index,item) {
        var $item = $item);
        $item.text($item.text() + ' ' + $item.attr('data-feature-id'));
    });
```

```javascript
$('#save-button')
    .click(function() { console.log('clicked'})
    .addClass('bordered')
```

---

## Working with User Input

```javascript
// textarea example
$('#notes-box').val('there are my notes');
$('#notes-box').val(); // 'these are my notes'
```

```javascript
// date
$('showing-date').val('test'); // 'test' does not conform to the required format, 'yyyy-MM-dd'
$('showing-date').val('2015-01-01');
$('showing-date').val(); // '2015-01-01'
```

```javascript
// checkboxes
$('input[type="checkbox"]').eq(0).attr('checked', true); // this doesn't work!!!
$('input[type="checkbox"]').eq(0).prop('checked', true);
$('input[type="checkbox"]').eq(0).prop('checked'); // true
```

```javascript
// radio buttons
var status = $('input[name="available"]:checked').val();
```

---

## The Big Picture

The API between versions 1.x and versions 2.x is the same. But 1.x is thought to support IE 6,7 and 8.

> jQuery lives in the JavaScript ecosystem.

Node.js allows you to use javascript outside of the browser with the v8 engine. We can use jQuery and native web-based applications.

[Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)

### Naming Conventions

```javascript
var h2 = document.getElemntsByTagName('h2');
var $h2 = $('h2');

var $items = $('#special-features li');

$items.height('200px')
    .each(function(index,item) {
        var $item = $(item);
        // ...
    });
```

---