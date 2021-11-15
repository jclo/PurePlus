/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0,
  object-curly-newline: 0 */

'use strict';

// -- Vendor Modules
const { src, dest, series, parallel } = require('gulp')
    , del     = require('del')
    , header  = require('gulp-header')
    ;


// -- Local Modules
const config = require('./config')
    ;


// -- Local Constants
const { dist }    = config
    , { name }    = config
    , { cssdir }  = config
    , { license } = config
    ;


// -- Local Variables


// -- Gulp Private Tasks

// Removes the previous dist.
function deldist(done) {
  del.sync(dist);
  done();
}

// Copies README and LICENSE.
function doskeleton() {
  return src(['README.md', 'LICENSE.md'])
    .pipe(dest(dist))
  ;
}


// Copies the css file.
function copycss() {
  return src(`${cssdir}/${name}.min.css`)
    .pipe(header(license))
    .pipe(dest(`${dist}/css`))
  ;
}


// -- Gulp Public Task(s):

module.exports = series(
  deldist,
  parallel(doskeleton, copycss),
);
