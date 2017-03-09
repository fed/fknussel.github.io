export default [
  {
    id: 'introduction-to-baconjs',
    image: '//raw.githubusercontent.com/fknussel/fknussel.github.io/master/public/assets/bacon.png',
    title: 'Functional Reactive Programming with Bacon.js',
    content: 'This is a series of blog posts on Functional Reactive Programming (FRP) in JavaScript using Bacon.js.',
    links: [
      {
        title: 'Wrapping things in Bacon',
        url: '//medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
        description: 'Learn to create event streams from multiple sources: DOM events, promises, timers and a bunch of others.'
      },
      {
        title: 'Event Streams vs Properties',
        url: '//medium.com/@fknussel/event-streams-vs-properties-e55b53be8f42',
        description: 'Brief overview of what properties are and how they are different from event streams. We also go through how to create them and how to convert event streams into properties and vice versa.'
      },
      {
        title: 'Manipulating Event Streams',
        url: '//medium.com/@fknussel/manipulating-bacon-js-event-streams-a1da0632fa10',
        description: 'Here we\'ll be creating new observables from an original one by applying different sorts of transformations to each event in a source stream, and then emitting the result of these manipulations.'
      }
    ]
  },
  {
    id: 'javascript-fundamentals',
    image: '//raw.githubusercontent.com/fknussel/fknussel.github.io/master/public/assets/javascript.png',
    title: 'JavaScript Fundamentals',
    content: 'This is my "Making sense out of JavaScript" series, with articles touching on core aspects of the language.',
    links: [
      {
        title: 'Making sense out of Context',
        url: '//medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9',
        description: 'Learn how the this keyword works, and the different ways in which contexts are bound on function calls.'
      },
      {
        title: 'Arrays, Objects and Mutations',
        url: '//medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa',
        description: 'Some ideas on how to treat arrays and objects as if they were immutable, as well as a review of the methods that mutate them.'
      }
    ]
  },
  {
    id: 'react-redux-and-friends',
    image: '//raw.githubusercontent.com/fknussel/fknussel.github.io/master/public/assets/react.png',
    title: 'React, Redux and Friends',
    content: 'Just a bunch of thoughts around the React ecosystem, mostly on declarative UIs and state management libs.',
    links: [
      {
        title: 'A look at the inner workings of Redux',
        url: '//medium.com/@fknussel/redux-3cb5aac94a66',
        description: 'Let\'s try to understand what\'s really going on under the hood when we use Redux by implementing a simplified version of it from scratch.'
      }
    ]
  }
];
