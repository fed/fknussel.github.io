---
layout: post
title: Setting setTimeout's delay to 0
tags: javascript puzzle
---

`setTimeout()` allows you to [set the delay to zero](https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout), or not pass it in altogether, in which case it will default to zero.

However, a zero second delay doesn't really do what we would expect. Take a look at this example:

```js
function first() {
  setTimeout(function () {
    console.log('FIRST');
  });
}

function second() {
  console.log('SECOND');
}

first();
second();
```

[http://jsbin.com/qucaposivu/1/edit?js,console](http://jsbin.com/qucaposivu/1/edit?js,console)

The expected output would be seeing `FIRST` followed by `SECOND`, although that's not really the case.

What's going on here and why? When is it useful?

**Watch the answer here:**

<div class="embed-container">
  <iframe src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" allowfullscreen></iframe>
</div>
