/*! ****************************************************************************
 * PurePlus v0.91.0
 *
 * Extends Yahoo's PureCSS library.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2024 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v2.1.1.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
const $__ES6GLOB = {};
(function(root, factory) {
  'use strict';

  /* c8 ignore start */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.PurePlus = factory(root);
  }
  /* c8 ignore stop */
}($__ES6GLOB, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* eslint-disable one-var, no-unused-vars, semi-style */

  let PurePlus
    ;

  /* eslint-enable one-var, no-unused-vars, semi-style */

  /** **************************************************************************
   *
   * A ...
   *
   * main.js is just a literal object that contains a set of functions.
   * It can't be instantiated.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this ES6lib object,
   *  . whoami                      returns the library name and version,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousPurePlus = root.PurePlus;


    // -- Local Variables


    // -- Main -----------------------------------------------------------------

    PurePlus = {

      // Useful to retrieve the library name and version when it is
      // embedded in another library as an object:
      _library: { name: 'PurePlus', version: '0.91.0' },


      // -- Private Static Methods ---------------------------------------------

      /**
       * Returns the internal objects for testing purpose.
       * (must not be deleted)
       *
       * @method ()
       * @private
       * @param {}            -,
       * @returns {Object}    returns a list of internal objects,
       * @since 0.0.0
       */
      _setTestMode() {
        return [];
      },


      // -- Public Static Methods ----------------------------------------------

      /**
       * Returns a reference to this ES6lib object.
       * (must not be deleted)
       *
       * Nota:
       * Running ES6lib in no conflict mode, returns the ES6lib variable to
       * its previous owner.
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the ES6lib object,
       * @since 0.0.0
       */
      noConflict() {
        /* eslint-disable-next-line no-param-reassign */
        root.PurePlus = previousPurePlus;
        return this;
      },

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },
    };

    // Attaches constants to ES6lib that provide name and version of the lib.
    PurePlus.NAME = 'PurePlus';
    PurePlus.VERSION = '0.91.0';

    // END OF IIFE
  }());
  /* eslint-enable no-underscore-dangle */

  // Returns the library name:
  return PurePlus;
}));

// -- Export
export default $__ES6GLOB.PurePlus;
