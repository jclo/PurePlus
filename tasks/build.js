/* eslint one-var: 0, import/no-extraneous-dependencies: 0, semi-style: 0
  no-param-reassign: 0 */

'use strict';

// -- Vendor Modules
const { parallel } = require('gulp')
    ;


// -- Local Modules
const makecss = require('./makecss')
    ;


// -- Local Constants


// -- Local Variables


// -- Gulp Private Tasks


// -- Gulp Public Task(s)
module.exports = parallel(makecss);
