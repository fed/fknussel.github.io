const projects = [
  {
    id: 'introduction-to-baconjs',
    image: 'https://baconjs.github.io/logo.png',
    title: 'Introduction to Functional Reactive Programming with Bacon.js',
    content: 'This is a series of blog posts on Functional Reactive Programming (FRP) in JavaScript using Bacon.js. It goes through the very basics of Observables, from creating them to manipulating and combining them.',
    links: [
      {
        title: 'Wrapping things in Bacon',
        url: '//medium.com/@fknussel/wrapping-things-in-bacon-27658075ed80',
        description: 'Learn to create event streams from multiple sources: DOM events, promises, timers and a bunch of others.'
      },
      {
        title: 'Event Streams vs Properties in Bacon.js',
        url: '//medium.com/@fknussel/event-streams-vs-properties-e55b53be8f42',
        description: 'Brief overview of what properties are and how they are different from event streams. We also go through how to create them and how to convert event streams into properties and viceversa.'
      }
    ]
  }
];

export default projects;
