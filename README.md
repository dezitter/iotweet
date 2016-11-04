# Iotweet

A simple web application to fetch & filter tweets including the `#iot` hashtag.

## How to run

1. `> git clone https://github.com/dezitter/iotweet`
2. `> cd iotweet/`
3. `> cp env.example .env`
4. Edit the `.env` file and set your [Twitter Application Settings](https://apps.twitter.com/)
5. `> npm install`
6. `> npm run start`
7. Go to [http://localhost:3000](http://localhost:3000)

## Thoughs & Ideas

### Why using a module loader such as browserify

AngularJS resolves dependencies via its own system, relying on dependency
injection. But using a module loader such as browserify has several benefits:

* it encourages modularity.
* it makes the dependencies explicit and easy to find.
* browserify takes care of the ordering itself, `<script>` tags are order-sensitive.
* browserify wraps each module in a function, effectively creating a JS scope
and thus offering some 'privacy' for each module.
* we can benefit from the richness of the npm registry.

### Why not including Angular in the bundle

The code in `bundle.js` is more likely to change than the AngularJS script. By
removing it from the bundle we can benefit from the browser cache. If it was
included in the bundle, changing a single line of our code would cause the whole
bundle to be re-downloaded, AngularJS included.

### AngularJS

It is somehow hard to determine what are the best practices. For example the
official tutorial offers a component-based approach via `.component(...)`,
yet most online tutorials or even the Angular guides mostly use controllers.

###
