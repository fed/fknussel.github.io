---
layout: post
title: Barking dogs
tags: javascript puzzle
puzzle: true
---

How'd you fix this code so that you get to see the name of our puppy a second after running it?

```js
var Puppy = function (name) {
  this.firstname = name;
}

Puppy.prototype.bark = function () {
  console.log(this.firstname + " says: woof!");
}

var scooby = new Puppy('Scooby');

scooby.bark();

setTimeout(scooby.bark, 1000);
```

[http://jsbin.com/vebakub/edit?js,console](http://jsbin.com/vebakub/edit?js,console)
