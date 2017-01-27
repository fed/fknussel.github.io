# Personal Website ![Dependencies](https://david-dm.org/fknussel/fknussel.github.io/dev-status.svg)

![Homer's Website](http://i.imgur.com/azf3acH.gif)

This is my personal website and portfolio. I use this mainly as a hub to all of the articles I write and publish on [Medium](https://medium.com/@fknussel).

## Cloning the Project

Do yourself a favour and clone this project using the `--depth=1` flag 😉

```
git clone https://github.com/fknussel/fknussel.github.io.git --depth=1
```

## Publishing Changes

This site is hosted by GitHub pages. Remember to check in the `build/bundle.js` file whenever changes are made in order to have the page update.

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Fire up Webpack Dev Server, app will go live on `http://localhost:6789` |
| `yarn run clean` | Remove `build` directory |
| `yarn run build` | Build `build/bundle.js` file |
