/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const pack = require('../package.json');


// -- Local Constants
const libname = 'PurePlus'
    , name    = libname.replace(/\s+/g, '').toLowerCase()
    ;


// -- Local Variables


// -- Main

module.exports = {
  ES6GLOB: '$__ES6GLOB',
  dist: './_dist',
  root: '.',
  libdir: './js',
  cssdir: './css',
  imgdir: './img',
  libname,
  name,
  index: './index.js',
  distlink: `./_dist/lib/${name}.js`,

  // These are the Javascript files required to build the library.
  /* eslint-disable no-multi-spaces */
  src: [
    // These two files (_header, _head.js) must be declared
    // in this order as they create the umd module, define the global
    // constants/variables.
    './src/js/_header',
    './src/js/_head.js',

    './src/js/main.js',

    // This file must always be the last one as it closes the umd module.
    './src/js/_footer',
  ],
  /* eslint-enable no-multi-spaces */

  css: [
    './src/css/style.css',
  ],

  img: [
    './src/img/error.svg',
    './src/img/info.svg',
    './src/img/note.svg',
    './src/img/success.svg',
    './src/img/warning.svg',
  ],

  webfiles: [
    // These are the files to copy to the root path of the web app,
    './README.md',
    './LICENSE.md',
  ],

  license: {
    get js() {
      return ['/*! ****************************************************************************',
        ` * ${libname} v${pack.version}`,
        ' *',
        ` * ${pack.description}.`,
        ' * (you can download it from npm or github repositories)',
        ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
        ' * Released under the MIT license. You may obtain a copy of the License',
        ' * at: http://www.opensource.org/licenses/mit-license.php).',
        ' * Built from ES6lib v2.1.1.',
        ' * ************************************************************************** */',
        ''].join('\n');
    },

    get css() {
      return ['/*! ****************************************************************************',
        ` * ${libname} v${pack.version}`,
        ' *',
        ` * ${pack.description}.`,
        ' * (you can download it from npm or github repositories)',
        ` * Copyright (c) ${(new Date()).getFullYear()} ${pack.author.name} <${pack.author.email}> (${pack.author.url}).`,
        ' * Released under the MIT license. You may obtain a copy of the License',
        ' * at: http://www.opensource.org/licenses/mit-license.php).',
        ' * Built from ES6lib v2.1.1.',
        ' * ************************************************************************** */',
        ''].join('\n');
    },
  },
};
