# Personal Website

![Homer's Website](http://i.imgur.com/azf3acH.gif)

This is my personal website and portfolio, just a simple site I built to showcase some of my work. I built this using [generator-ui](https://github.com/fknussel/generator-ui), a Yeoman generator for scaffolding simple GitHub pages.

## Prerequisites

* NodeJS (http://nodejs.org/)
* Grunt CLI (http://gruntjs.com/)

Run `npm install` the first time you clone the app in order to build the binaries for any node modules.

Grunt CLI can be installed globally for convenience with `npm install -g grunt-cli`, otherwise the binary can be found here: `./node_modules/grunt-cli/bin/grunt`

## Building and Running

Run `npm run build` to build the app.

When developing, there is a watch task that will automatically watch any of your source files for changes, and generate the appropriate distribution files.

To run start the app and the watch task, run `npm start`. The app will go live on http://0.0.0.0:6789/.

## Run Tests

Run `npm test` to build the app and run all the tests.

## Release Versions

1. `git fetch`
2. `git checkout develop && git reset --hard origin/develop`
3. `npm version [<newversion> | major | minor | patch]`
4. `git checkout master && git reset --hard origin/master`
5. `git merge develop`
6. `git push --tags && git push && git checkout develop && git push`

## Semantic Versioning

Given a version number `MAJOR.MINOR.PATCH`, increment the:

1. `MAJOR` version when you make incompatible API changes,
2. `MINOR` version when you add functionality in a backwards-compatible manner, and
3. `PATCH` version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata [are available](https://docs.npmjs.com/cli/version) as extensions to the `MAJOR.MINOR.PATCH` format.

See the [Semantic Versioning](http://semver.org/) specification for more information.
