// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const PurePlus  = require('../index')
    , pack    = require('../package.json')
    , testlib = require('./int/pureplus')
    ;


// -- Local Constants
const libname = 'PurePlus';


// -- Local Variables


// -- Main
describe('Test PurePlus:', () => {
  testlib(PurePlus, libname, pack.version, 'without new');
});
