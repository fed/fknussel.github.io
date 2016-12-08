import baconLogo from 'assets/bacon.png';
import javascriptLogo from 'assets/javascript.svg';
import jsortLogo from 'assets/jsort.svg';
import reactLogo from 'assets/react.svg';

const projects = [
  {
    id: 'introduction-to-baconjs',
    image: baconLogo,
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
      }
    ]
  },
  {
    id: 'javascript-fundamentals',
    image: javascriptLogo,
    title: 'JavaScript Fundamentals',
    links: [
      {
        title: 'ES6 Overview',
        url: '//medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
        description: 'Learn to create event streams from multiple sources: DOM events, promises, timers and a bunch of others.'
      }
    ]
  },
  {
    id: 'jsort',
    image: jsortLogo,
    title: 'jsort',
    content: 'Simple array sorting utility supporting multiple data types.',
    links: [
      {
        title: 'Check it out',
        url: '//github.com/fknussel/jsort'
      }
    ]
  },
  {
    id: 'react-redux-boilerplate',
    image: reactLogo,
    title: 'React & Redux Boilerplate',
    content: 'Simple array sorting utility supporting multiple data types.',
    links: [
      {
        title: 'Check it out',
        url: '//github.com/fknussel/react-redux-boilerplate'
      }
    ]
  }
];

export default projects;
