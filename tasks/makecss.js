/* eslint  one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { src, dest, series } = require('gulp')
    , del      = require('del')
    , cleanCSS = require('gulp-clean-css')
    , concat   = require('gulp-concat')
    ;


// -- Local modules
const config = require('./config')
   ;


// -- Local constants
const destination  = config.cssdir
    , { css }      = config
    , lib          = config.libname
    , name         = lib.replace(/\s+/g, '').toLowerCase()
    ;


// -- Local variables


// -- Gulp Private Tasks

// Removes the previous version.
function clean(done) {
  del.sync(destination);
  done();
}

// Creates the css file.
function docss() {
  return src(css)
    .pipe(cleanCSS({
      specialComments: 1,
      format: 'keep-breaks',
    }))
    .pipe(concat(`${name}.min.css`))
    .pipe(dest(destination))
  ;
}


// -- Gulp Public Task(s)
module.exports = series(clean, docss);
