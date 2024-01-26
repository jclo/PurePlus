// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0 */

'use strict';

// -- Vendor Modules
const { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants
// Number of properties added by your library.
const OWNPROPS = 0
    , TESTMODE = 0
    ;


// -- Local Variables


// -- Main
module.exports = function(PurePlus, libname, version) {
  describe('PurePlus introspection:', () => {
    describe('Test the nature of PurePlus:', () => {
      it('Expects PurePlus to be an object.', () => {
        expect(PurePlus).to.be.an('object');
      });

      it(`Expects PurePlus to own ${6 + OWNPROPS} properties.`, () => {
        expect(Object.keys(PurePlus)).to.be.an('array').that.has.lengthOf(6 + OWNPROPS);
      });
    });


    // -- This section must not be modified --
    // NAME, VERSION, _library, _setTestMode, noConflict, whoami
    describe('Check the owned generic properties:', () => {
      it(`Expects PurePlus to own the property "NAME" whose value is "${libname}".`, () => {
        expect(PurePlus).to.own.property('NAME').that.is.equal(libname);
      });

      it(`Expects PurePlus to own the property "VERSION" whose value is "${version}".`, () => {
        expect(PurePlus).to.own.property('VERSION');
      });

      it('Expects PurePlus to own the property "_library" that is an object.', () => {
        expect(PurePlus).to.own.property('_library').that.is.an('object');
      });

      it('Expects PurePlus to own the property "_setTestMode" that is a function.', () => {
        expect(PurePlus).to.own.property('_setTestMode').that.is.a('function');
      });

      it('Expects PurePlus to own the property "noConflict" that is a function.', () => {
        expect(PurePlus).to.own.property('noConflict').that.is.a('function');
      });

      it('Expects PurePlus to own the property "whoami" that is a function.', () => {
        expect(PurePlus).to.own.property('whoami').that.is.a('function');
      });

      describe('Test the owned generic properties:', () => {
        it('Expects the property "_library" to own two properties.', () => {
          expect(Object.keys(PurePlus._library)).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects the property "_library" to own the property "name" whose value is "${libname}".`, () => {
          expect(PurePlus._library).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects the property "_library" to own the property "version" whose value is "${version}".`, () => {
          expect(PurePlus._library).to.own.property('version').that.is.equal(version);
        });

        it(`Expects the property "_setTestMode" to return an array with ${TESTMODE} item(s).`, () => {
          expect(PurePlus._setTestMode()).to.be.an('array').that.has.lengthOf(TESTMODE);
        });

        it('Expects the property "noConflict" to return an object.', () => {
          expect(PurePlus.noConflict()).to.be.an('object');
        });

        it('Expects the property "whoami" to return an object.', () => {
          expect(PurePlus.whoami()).to.be.an('object');
        });
        it('Expects this object to own two properties.', () => {
          expect(Object.keys(PurePlus.whoami())).to.be.an('array').that.has.lengthOf(2);
        });
        it(`Expects this object to own the property "name" whose value is "${libname}".`, () => {
          expect(PurePlus.whoami()).to.own.property('name').that.is.equal(libname);
        });
        it(`Expects this object to own the property "version" whose value is "${version}".`, () => {
          expect(PurePlus.whoami()).to.own.property('version').that.is.equal(version);
        });
      });
    });


    // -- This section must be adapted --
    // Replace here 'getString' and 'getArray' by the inherited properties
    // added by your library.
    describe('Check the owned specific properties:', () => {
      describe('Test the owned specific properties:', () => {
        //
      });
    });
  });
};
