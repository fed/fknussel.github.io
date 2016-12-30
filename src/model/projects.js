import jsortLogo from 'assets/jsort.svg';

const projects = [
  {
    id: 'introduction-to-baconjs',
    image: '//raw.githubusercontent.com/fknussel/fknussel.github.io/master/src/assets/bacon.png',
    title: 'Functional Reactive Programming with Bacon.js',
    content: 'This is a series of blog posts on Functional Reactive Programming (FRP) in JavaScript using Bacon.js. It goes through the very basics of Observables, from creating them to manipulating and combining them.',
    links: [
      {
        title: 'Wrapping things in Bacon',
        url: '//medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
        description: 'Learn to create event streams from multiple sources: DOM events, promises, timers and a bunch of others.'
      },
      {
        title: 'Event Streams vs Properties',
        url: '//medium.com/@fknussel/event-streams-vs-properties-e55b53be8f42',
        description: 'Brief overview of what properties are and how they are different from event streams. We also go through how to create them and how to convert event streams into properties and viceversa.'
      },
      {
        title: 'Manipulating Event Streams',
        url: '//medium.com/@fknussel/manipulating-bacon-js-event-streams-a1da0632fa10',
        description: 'Go through all of the main ways to modify an observable: map, filter, scan, take, skip, delay, debounce, throttle, etc.'
      }
    ]
  },
  {
    id: 'javascript-fundamentals',
    image: '//raw.githubusercontent.com/fknussel/fknussel.github.io/master/src/assets/javascript.png',
    title: 'JavaScript Fundamentals',
    content: 'Here\'s a bunch of articles on JavaScript, just a collection of concepts/thoughts/examples I\'d like to keep track of and think are worth sharing.',
    links: [
      {
        title: 'Making sense out of Context',
        url: '//medium.com/@fknussel/making-sense-out-of-context-in-javascript-66fffe4054c9',
        description: 'Learn how the this keyword works in JavaScript and the different ways in which contexts are bound on function calls.'
      }
    ]
  },
  {
    id: 'jsort',
    image: jsortLogo,
    title: 'jsort',
    content: 'jsort is a simple array sorting utility library for JavaScript. You can use jsort in your ES6/CommonJS/AMD projects or directly in your browser. Just pass in an array along with all the options you need to set, and jsort will return a sorted array for you. jsort is less than 1 Kb, has a 100% test coverage, and a small and intuitive API which will make including it in your project really easy.',
    links: [
      {
        title: 'Check it out on GitHub',
        url: '//github.com/fknussel/jsort'
      }
    ]
  },
  {
    id: 'react-redux-boilerplate',
    image: '//github.com/fknussel/fknussel.github.io/raw/master/src/assets/react.png',
    title: 'React & Redux Boilerplate',
    content: 'This is a simple boilerplate based on my usual configuration for React projects. It features React.js as the UI library, Redux to handle the application state, React Router as the routing library, Babel to transpile ES6/JSX code to plain old JavaScript, Webpack to bundle all code together, Immutable.js to model state on reducers, CSS modules and Post CSS for styling, eslint and stylelint for linting the codebase and Jest and Enzyme for unit and functional testing.',
    links: [
      {
        title: 'Check it out on GitHub',
        url: '//github.com/fknussel/react-redux-boilerplate'
      }
    ]
  }
];

export default projects;
