# plugin-sass

[![Build Status](https://travis-ci.org/mobilexag/plugin-sass.svg?branch=master)](https://travis-ci.org/mobilexag/plugin-sass)
[![Dependency Status](https://david-dm.org/mobilexag/plugin-sass.svg)](https://david-dm.org/mobilexag/plugin-sass)

[SystemJS](https://github.com/systemjs/systemjs)
[SASS](http://sass-lang.com) loader plugin. Can easily be installed with
[jspm](http://jspm.io) package manager.

```sh
$ jspm install scss=sass
```

To apply your SASS styles to your current page asynchronously:

```js
System.import('./style.scss!');
```

or synchronously

```js
import './style.scss!';
```

You can also use the [older syntax](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#syntax)
, known as the indented syntax (or sometimes just "_Sass_")

```js
System.import('./style.sass!scss');
```

## Importing from jspm

You can import scss files from jspm packages *from within scss files* using the `jspm:` prefix. For example, if you have jspm installed `twbs/bootstrap-sass`:

```scss
@import 'jspm:bootstrap-sass/assets/stylesheets/bootstrap';
```

## Testing the plugin

```sh
$ npm install -g gulp
...
$ npm install
...
$ jspm install
```

Now you can test runtime compilation

```sh
$ gulp test:runtime
```

bundling

```sh
$ gulp test:bundle
```

or static bundling

```sh
$ gulp test:bundleStatic
```

After that open [http://localhost:3000](http://localhost:3000) in the browser
of your choice.
