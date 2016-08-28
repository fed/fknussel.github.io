---
layout: post
title: Wrapping things in Bacon
tags: javascript functional-reactive-programming bacon.js
---

This post is about creating observables by wrapping values as reactive datatypes. I reckon this is a good starting point if you are interested in functional reactive programming.

## A little bit of context

Functional Reactive Programming (FRP) is *functional programming with first class representation for values that change over time*. We can represent sequences of any event occurring asynchronously at unknown points in time as a **stream**.

There are many implementations of the core concepts of FRP, but today I'll be using [Bacon.js](https://github.com/baconjs/bacon.js).

![Bacon.js](https://baconjs.github.io/logo.png)

In Baconland we have two different abstractions for reactive data: **Properties** and **EventStreams**. Properties are continuous values whereas event streams are discrete values. More on this later.

## Creating Observables

You can create reactive data types by wrapping various sources using Bacon.js. Which wrapper to use depends on what kind of data source you have. Here I'm gonna show you how to use the most common ones.

<figure>
  <img src="http://i.imgur.com/apeautH.jpg?1" alt="Wrapping things in Bacon" />
  <figcaption>Yup, we are legitimately wrapping things in Bacon here</figcaption>
</figure>

Based on my experience learning Bacon and trying to wrap my head around creating event streams, I'll introduce first those constructor methods I consider easier to understand and that make more sense to first timers.

One more thing: the reason why we need to create an instance of a Bacon-y data type is that JavaScript doesn't implement FRP natively (yet?), so in order to get these observable objects with all the built-in reactive superpowers we need to wrap data sources in a handful of constructor methods Bacon provides. For instance, mouse clicks is a valid source for an event stream.

Finally, check out the [official docs](https://github.com/baconjs/bacon.js#creating-streams) for a more thorough reference of wrapper methods and further examples on how to create reactive datatypes from other sources. You can also play around with this [bin](http://jsbin.com/madizav/edit?js,console,output) as you follow along these examples.

### From a DOM event using `Bacon.fromEvent`

You can create observables out of `EventTarget` objects. These are typically DOM elements that can trigger events like `click`, `keydown`, `mousemove`, etc.

For instance, this event listener and handler:

```js
let button = document.querySelector('#btn');

button.addEventListener('click', () => {
  console.log('you just clicked on the button');
});
```

can be baconified by doing:

```js
Bacon
  .fromEvent(document.querySelector('#btn'), 'click')
  .onValue(() => console.log('you just clicked on the button'));
```

Not a big difference so far, but Bacon provides a functional interface to manipulate, combine and handle event streams:

```js
let clickStream = Bacon.fromEvent(document.querySelector('#btn'), 'click');

clickStream
  .map(() => Math.round(10 * Math.random()))
  .filter((value) => value > 0)
  .onValue((value) => console.log(value));

clickStream
  .skip(1)
  .take(4)
  .onValue(() => console.log('this displays on the 2nd, 3rd, 4th and 5th clicks only'));
```

Now try to rewrite that using callbacks...

### From a promise using `Bacon.fromPromise`

A stream from a promise will resolve the promise only when subscribed to, and then push the resolved value into the stream. This stream will contain a single value or an error, followed immediately by stream end. Method signature is as follows: `Bacon.fromPromise(promise)`

```js
let ajaxCall = fetch('//api.myjson.com/bins/2jlih')
  .then((response) => response.json())
  .catch((error) => console.error('parsing failed', error));

Bacon
  .fromPromise(ajaxCall)
  .flatMap(Bacon.fromArray)
  .map((location) => `${location.city}, ${location.state}, ${location.country}`)
  .onValue((location) => console.log(location));
```

### From a timer using `Bacon.sequentially`

`Bacon.sequentially(interval, values)` takes an interval in milliseconds and an array of values, and creates an event stream that emits one value at a time, all delivered with the given interval. It will stop once all values have been emitted.

```js
Bacon
  .sequentially(1000, [1, 2, 3, 4, 5])
  .onValue((value) => console.log(value));
```

### From a timer using `Bacon.repeatedly`

This one is sort of similar to `Bacon.sequentially`, except for this one never stops emitting values. `Bacon.repeatedly(interval, values)` repeats all the values indefinitely with the given interval in milliseconds.

```js
Bacon
  .repeatedly(1000, ['spring', 'summer', 'autumn', 'winter'])
  .onValue((value) => console.log(value));
```

### From a timer using `Bacon.interval`

`Bacon.interval(interval, value)` repeats the (single) value indefinitely with the given interval in milliseconds.

In this example, the stream will return *beer time!* every second (convenient, huh?). It's important to note this stream never ends once you subscribed to it unless you specifically unsubscribe.

```js
Bacon
  .interval(1000, 'beer time!')
  .onValue((value) => console.log(value));
```

### From a timer using `Bacon.later`

`Bacon.later(delay, value)` creates a single-element stream that produces the given value after the specified delay (also in milliseconds).

In this case, Bacon will throw the value *I am one second late* into the stream after one second:

```js
Bacon
  .later(1000, 'I am one second late')
  .onValue((value) => console.log(value));
```

### From an array using `Bacon.fromArray`

`Bacon.fromArray(values)` returns a stream that fires one event for each element in the array to the first subscriber only. The stream ends after these values have been delivered.

```js
Bacon
  .fromArray([1, 2, 3, 4])
  .reduce(0, (accumulator, currentValue) => accumulator + currentValue)
  .onValue((value) => console.log(value));
```

Btw: `.fold()` and `.reduce()` are aliases. You can use them interchangeably.

One more things: try replacing `.reduce()` with `.scan()` to see what happens.

### From a single value using `Bacon.once`

`Bacon.once(value)` creates an event stream that delivers the given single value for the first subscriber only (in other words, *this means this stream can only have one subscriber*). The stream will end immediately.

```js
Bacon
  .once('rawr')
  .onValue((value) => console.log(value));
```

### From a callback using `Bacon.fromCallback`


`Bacon.fromCallback(sink)` creates a stream from a function that accepts a callback (aka: **sink**). The function is supposed to call its callback just once.

In this example, we are creating a stream that outputs a single value and ends after that. Here `sink` is the callback, as in, the sinkhole you throw stuff into to make it go off and be an event in the event stream.

```js
Bacon
  .fromCallback((sink) => {
    setTimeout(() => {
      sink('some-new-value-for-event');
    }, 1000);
  })
  .onValue((value) => console.log(value));
```

Or you can also `sink(new Bacon.Error('Died....'));`

## Subscribing to an Observable

Since all values happen over time, we have no idea when they will be available, thus we can't treat these values synchronously. We need to provide a callback that can be ran once a value gets pushed to the stream. This can be done with a subscriber, which is just a function that is called once you have data coming through in your observable.

In Bacon.js, we usually use the `.onValue()` method to subscribe to an observable.

* **Heads up #1:** `onValue` returns a function to *unsubscribe* from the stream. This is important to remember as it means that we *cannot* continue our chaining pipeline after a subscriber method. More on this later.

* **Heads up #2:** All reactive datatypes created using Bacon.js are lazy evaluated. This means the data flow just won't happen at all unless you have a subscriber at the end of your pipeline.

There is also a special subscriber that behaves a bit differently: `.log()`, which we can use for logging all of the values in an observable. This logger method **will initiate the data flow**, but it won't return an unsubscribe function, but rather return the observable it self (ie: we can keep on chaining methods).

## Unsubscribing from an Observable

When you register a subscriber to a stream (that is, whenever you chain the `.onValue()` method to your stream) you get back an unsubscribe function which you can call later on to unsubscribe from that stream.

```js
let unsubscribe = Bacon
  .fromEvent(document.querySelector('#btn'), 'click')
  .onValue(() => console.log('you just clicked on the button'));

// later on...
unsubscribe();
```

Now, if this was the last of the subscribers (in this case it was the only one) and you run the unsubscribe function, the stream gets closed, ie: the event handler will be removed from the DOM.

## Useful links

Some resources I've used to put this post together:

* [https://github.com/baconjs/bacon.js/](https://github.com/baconjs/bacon.js/)
* [https://github.com/darrennolan/bacon.js-docs/](https://github.com/darrennolan/bacon.js-docs/)
* [https://github.com/mikaelbr/bacon-love/](https://github.com/mikaelbr/bacon-love/)
