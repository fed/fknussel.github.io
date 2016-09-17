One way to see how the EventStream works is to implement a manual stream where we can push values to. We can create an empty EventStream by using `Bacon.Bus()`.

Example:

```javascript
const bus = new Bacon.Bus();
bus.push('Hello World!');
bus.end();
```

This will create an EventStream, that has one value before it ends.

**Aside:** If you were to add a listener to the bus after a value is pushed, you wouldn't get the expected output. This is because unlike most EventStreams, the Bus isn't lazy.
