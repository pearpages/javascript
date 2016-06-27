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

---

## When Events Happen

---

## Chaining

---

## Working with User Input

---

## The Big Picture

---