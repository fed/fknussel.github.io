# Personal Website ![Dependencies](https://david-dm.org/fknussel/fknussel.github.io.svg)

![Homer's Website](http://i.imgur.com/azf3acH.gif)

This is my personal website and portfolio. I use this mainly as a hub to all of the articles I write and publish on [Medium](https://medium.com/@fknussel).

## Cloning the Project

Do yourself a favour and clone this project using the `--depth=1` flag 😉

```
git clone https://github.com/fknussel/fknussel.github.io.git --depth=1
```

## Prerequisites

* Node.js (https://nodejs.org/)
* Yarn (https://yarnpkg.com/)

## Development Tasks

| Command | Description |
|---------|-------------|
| `yarn install` | Fetch dependencies and build binaries for any of the modules |
| `yarn start` | Fire up Webpack Dev Server, app will go live on `http://localhost:3000` |
| `yarn run build` | Build a production-ready version of the site |
| `yarn test` | Run test suite |

## CI/CD

Deployments to production are handled by [CircleCI](https://circleci.com/gh/fknussel/fknussel.github.io). Commits to master trigger an automatic deployment to [surge.sh](https://surge.sh).
