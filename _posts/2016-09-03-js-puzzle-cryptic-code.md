---
layout: post
title: Cryptic code
tags: javascript puzzle
puzzle: true
---

Carefully go through this cryptic piece of code and try to figure out what `result` ends up being. Start at the very first function call and trace what happens to the values. A pencil and paper may help to keep values straight as they are passed in and changed.

```js
var hidden = mystery(3);
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery(input) {
  var secret = 4;
  input += 2;

  function mystery2(multiplier) {
    multiplier *= input;
    return secret * multiplier;
  }

  return mystery2;
}

function mystery3(param) {
  function mystery4(bonus) {
    return param(6) + bonus; 
  }

  return mystery4;
}
```
