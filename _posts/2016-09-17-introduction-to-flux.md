---
layout: post
title: Introduction to Flux
tags: flux architecture javascript react
---

Flux is an application architecture for building reactive user interfaces, and it replaces MVC in favour of a unidirectional data flow and more of a funcional programming style.

[Flux](http://facebook.github.io/flux/) is a design pattern just like MVC/MVP/MVVM rather than an actual framework, and has multiple implementations: there's an official [Facebook implementation](https://github.com/facebook/flux) although [Redux](https://github.com/reactjs/redux) is probably the most popular one around today.

## Data flow in Flux

Here's the main idea behind Flux:

1. A user interacts with a React view (let's say they click on a button to delete an item from a list).
2. The view propagates an action through a central dispatcher to the various stores that hold and manage the application state.
3. The state gets updated on the store.
4. The store notifies all of the subscribed views about this change.
5. The affected views get updated.

This plays especially well with React's declarative programming style, which allows the store to send updates without specifying how to transition views between states (and this is why it's so cool 🎉).

![Data flow in Flux](http://i.imgur.com/B765Yl0.png)

## Key parts in the Flux architecture

### Views dispatch actions

A dispatcher has two main responsibilities:

* it broadcasts events (which are called **actions** in Flux)
* it also registers callbacks to handle those actions

Note there is only ever one, global dispatcher (it's a **singleton**), and it operates as the central hub of data flow in a Flux application.

For this example we'll be using Facebook's dispatcher library which is very easy to instantiate:

```js
const dispatcher = new Dispatcher();
```

Let's say your application has a button that adds an item to a list:

```html
<button onClick={this.createNewItem}>New Item</button>
```

<<<<<<< ff60440fbb1abf0d7038ef052b02ee42848dcac7
What happens on click? Your view dispatches a very specific action of type `CREATE_ITEM` and some payload to provide the new item tite:
=======
What happens on click? Your view dispatches a very specific action of type `CREATE_ITEM` and some payload to provide the new item title:
>>>>>>> Add navigation drawer

```js
createNewItem() {
  dispatcher.dispatch({
    type: 'CREATE_ITEM', // Action type
    item: 'Grab a beer'  // Actual payload
  });
}
```

However, this can get pretty repetitive if many of your views need to trigger this same action. What's even worse, all of your views need to know the specifics of your action format. That's not cool. Flux suggests an abstraction, called **action creators**, which just abstracts the above into a function.

```js
const ListActions = {
  add: (item) => {
    dispatcher.dispatch({
      type: 'CREATE_ITEM',
      item
    });
  }
};
```

Now your view can just call your new action creator without having to worry about how the dispatcher works and what we need to pass in on to it:

```js
createNewItem() {
  ListActions.add('Grab a beer');
}
```

### Stores respond to dispatched actions

Stores contain the **state and business logic** for a particular domain within the application. They are somewhat similar to models in a traditional MVC architecture.

```js
const ListStore = {
  items: [],
  getAll: () => {
    return this.items;
  }
};
```

Stores respond to dispatched events across the whole application:

```js
dispatcher.register((action) => {
  switch(action.type) {
    case 'CREATE_ITEM':
      // We get to mutate data in here
      ListStore.items.push(action.item);
      break;
  }
}); 
```

This is traditionally how Flux registers callbacks. Each action contains an action type (this is sort of a unique event identifier) and the actual payload data for that action.

Key concepts here are:

* A store is the only part of your application that knows how to (and is allowed to) update data. This is probably one of the most fundamental ideas behind Flux. The action we dispatched doesn't know how to add or remove items.
* A store represents a single *domain* of your application, meaning we might have multiple stores within our app. If, for example, a different part of your application needs to keep track of some images and their metadata, you'd create another store and call it `ImageStore` (images being the second domain within your app). If your application is large, the domains will probably be obvious to you already. If your application is still small, you probably only need one store.
* Stores are the only ones allowed to register dispatcher callbacks. After all, these callbacks only purpose is to react to UI events and update the app state accordingly, and we already made it clear that just stores can do that. Your views should never call `dispatcher.register`. The dispatcher only exists to send messages from views to stores. Your views will respond to a different kind of event.

#### Stores emit change events

Now that our data has been updated, we need to spread the word so that views know about this. That's why stores emit an event, although not using the dispatcher. This might be confusing, but it's the Flux way.

Let's give our store the ability to trigger events by using Node's `EventEmitter`:

```js
const eventEmitter = new EventEmitter();
```

Let's then trigger our change event:

```js
case 'CREATE_ITEM':
  ListStore.items.push(action.title);
  eventEmitter.emit('CHANGE_EVENT');
  break;
```

Key concept here is we don't pass in the newest item when we trigger the change event. Our views should be dumb enough to only care that something has changed and re-render accordingly with the new set of data.

#### Views respond to change events

Now we need to display the list. Our views will re-render when the list changes.

First, let's listen for the change event from our `ListStore`. We'll do this when the component mounts (ie: when the component is first instantiated and the DOM is ready):

```js
componentDidMount() {  
  ListStore.bind('change', this.listChanged);
}
```

For simplicity's sake, we'll just call `forceUpdate`, which triggers a re-render:

```js
listChanged() {  
  // Since the list has changed, force the component to re-render
  this.forceUpdate();
}
```

Lastly, let's remove the event listener when our component unmounts:

```js
componentWillUnmount() {  
  ListStore.unbind('change', this.listChanged);
}
```

So now what? Let's look at our render function:

```js
render() {
  const items = ListStore.getAll();

  return (
    <div>
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>}
      </ul>
      <button onClick={this.createNewItem}>New Item</button>
    </div>
  );
}
```

### So, let's recap...

When you add a new item, the view dispatches an action, the store responds to that action by updating the app state, then the store triggers a change event, and finally the view responds to the change event by re-rendering itself.

### Re-rendering and React's virtual DOM

But here's a problem: we're re-rendering the entire view every time the list changes! Isn't that horribly inefficient?!

*Nope.* We surely call the render function again, and of course all of the code in the render method will get executed again. But **React will only update the real DOM if your rendered output has changed.** The render method is actually generating a "virtual DOM", which React compares to the previously rendered component. If the two DOMs are different, React will update the actual DOM **only with the difference**.

<<<<<<< ff60440fbb1abf0d7038ef052b02ee42848dcac7
Key concept here is: whenever the store data changes, your views shouldn't care if things were added, deleted, or modified. They should just re-render entirely. React's virtual DOM diff algorithm handles the heavy lifting of figuring out which of the real DOM nodes has changed.
=======
Key concept here is: whenever the store data changes, your views shouldn't care if things were added, deleted, or modified. They should just re-render entirely. React's virtual DOM diff algorithm handles the heavy lifting of figuring out which of the real DOM nodes have changed.
>>>>>>> Add navigation drawer

### One more things: don't use `forceUpdate`

I've used `forceUpdate` here just to keep things simple. A better approach would be to copy your list data into the component state and read the state in the render function.

<<<<<<< ff60440fbb1abf0d7038ef052b02ee42848dcac7
When the component first loads, store data is copied into the state. When the store updates, the data is re-copied entirely. This is better because internally, `forceUpdate` is synchronous, while `setState` is more efficient.
=======
When the component first loads, store data is copied into the state. When the store updates, the data is re-copied entirely. This is better because internally, `forceUpdate` is synchronous, while `setState` is more efficient.
>>>>>>> Add navigation drawer
