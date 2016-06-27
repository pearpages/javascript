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

---

## Adding Style and Effects

---

## When Events Happen

---

## Chaining

---

## Working with User Input

---

## The Big Picture

---