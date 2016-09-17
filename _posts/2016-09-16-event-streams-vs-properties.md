---
layout: post
title: Event Streams vs Properties in Bacon.js
tags: javascript functional-reactive-programming bacon.js
---

In Baconland we operate with two different types of observable data types: Properties and Event Streams. Here's a brief explanation of what these concepts are along with some concrete examples to illustrate when to choose one over the other.

Note that this discussion is Bacon-specific as in other implementations of FRP like RxJS we only the notion of observables, with no distinction between discrete and continuous data types.

# Event streams represent discrete values over time

You can think of event streams as lists of values (ie: events) happening over time, ie: `[(t1, v1), (t2, v2), ..., (tn, vn), ...]`. An event stream only holds a value at the very exact moment a new value is pushed to the stream. Event streams don't have the concept of initial values.

Examples of discrete values are:

* mouse clicks on a button:

```
const clickStream = Bacon.fromEvent(document.querySelector('#button'), 'click');
```

* key strokes on an input field:

```
const keyStream = Bacon.fromEvent(document.querySelector('#input'), 'keyup');
```

Note that for these examples, talking about initial values wouldn't make any sense. Also, these streams will only happen to have a value (event) pushed down the stream when the user either clicks on the button or press a key on the input field. Remember that clicking on the button means pushing that click event onto the stream (this click event is our value), and also note that event (again, *value*) travels down the stream until it gets consumed by an `onValue` method or similar.

# Properties introduce the notion of continuous values

In many ways properties behave very much like event streams. The main differences between properties and event streams are:

* Properties *can* have an **initial value**. They don't always do, though: depending on how a property is created, it may or may not have an initial value.
* Properties always hold a value, what they do is to "remember" the last value they got. This means properties are continuous, as opposed to event streams which have a discrete nature. The only exception to this rule is 
* The current value stays as its last value after the stream has ended.

This would be a more formal definition of properties: `f : t -> v`, where given a time `t`, there is an associated value `v`. The meat of this definition is that our value is always defined for **any** given `t`.

Examples of properties are:

* The position of our mouse cursor determined by any series of mouse movements:


```js
const mouseProperty = Bacon
  .fromEvent(document, 'mousemove')
  .map((event) => `(${event.x}, ${event.y})`)
  .toProperty();
```

* The value of an input field at any given time:

```js
const inputProperty = Bacon
  .fromEvent(document.querySelector('#input'), 'keyup')
  .map('.currentTarget.value')
  .toProperty('This is the default value');
```

## What does it really mean that properties remember their last value?

Why is this useful? combining streams and properties


## Creating properties from event streams

There are a couple methods you can use to turn your event stream into a property:

* `stream.toProperty()` creates a property based on the event stream. Since we are passing no arguments, you'll get a property without an initial value. The Property will get its first value from the stream, and will always hold a value thereafter.
* `stream.toProperty(initialValue)` also creates a property based off the event stream, but the argument will be used as the current value until the stream provides the next value.
* We can also `scan` and `fold` event streams to convert them into properties. `stream.scan()` or `stream.fold()` are similar to `reduce` in functional programming (in JS think of `Array.prototype.reduce()`... more on this later).

## Going the other way around: creating event streams from properties

When you have a Property, you some times would want to make it an EventStream. For instance, you can have a Property representing the text in an input (which is continuous), and want to make it to an EventStream with the text every time
it changes (discrete).

One way of converting to an EventStream is by doing `property.sample(interval)` where you can poll the source Property by a given interval, creating an EventStream with the values at the given interval.

Another way is by doing `.changes()`, which creates an EventStream with values from the changes of a Property. The `.changes()` method does not include the initial value of the Property. Alternative method `.toEventStream()` behaves
the same way as `.changes()`, but includes the initial value.

Another powerful way of creating an EventStream from a property is to use the `.sampledBy(EventStream)` method. We will get more into this in the advanced section of the workshop when looking at the "Sampled" exercise.




**Continuous can be observed but not counted.**
