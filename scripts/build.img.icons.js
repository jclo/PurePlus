#!/usr/bin/env node
/* *****************************************************************************
 *
 * Creates './img' folder.
 *
 * build:img:icons.js script copies all the project images into './public/img'
 * folder and copies project icons in the './public/img/icons' subfolder.
 *
 * Private Functions:
 *  . _help                       displays the help message,
 *  . _clean                      removes the contents from the previous buiild,
 *  . _cpimg                      copies all the project images in the img folder,
 *
 *
 * Public Static Methods:
 *  . run                         executes the script,
 *
 *
 * @namespace    -
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************** */
/* eslint one-var: 0, semi-style: 0, no-underscore-dangle: 0,
  import/no-extraneous-dependencies: 0 */

'use strict';

// -- Vendor Modules
const fs   = require('fs')
    , path = require('path')
    , nopt = require('nopt')
    ;


// -- Local Modules
const config = require('./config')
    ;


// -- Local Constants
const VERSION = '0.0.0-alpha.0'
    , opts       = {
      help: [Boolean, false],
      version: [String, null],
    }
    , shortOpts = {
      h: ['--help'],
      v: ['--version', VERSION],
    }
    , parsed     = nopt(opts, shortOpts, process.argv, 2)
    , { imgdir } = config
    ;


// -- Local Variables


// -- Private Functions --------------------------------------------------------

/**
 * Dispays the help message.
 *
 * @function ()
 * @private
 * @param {}                -,
 * @returns {}              -,
 * @since 0.0.0
 */
function _help() {
  const message = ['',
    'Usage: command [options]',
    '',
    '                       copies project img and icons to ./img folder',
    '',
    'Options:',
    '',
    '-h, --help             output usage information',
    '-v, --version          output the version number',
    '',
  ].join('\n');

  process.stdout.write(`${message}\n`);
}

/**
 * Removes the previous build.
 *
 * @function ()
 * @private
 * @param {}                -,
 * @returns {Object}        returns a promise,
 * @since 0.0.0
 */
function _clean() {
  const d1 = new Date();
  process.stdout.write('Starting \'\x1b[36mbuild:img:clean\x1b[89m\x1b[0m\'...\n');

  return new Promise((resolve) => {
    fs.rm(imgdir, { force: true, recursive: true }, (err1) => {
      if (err1) throw new Error(err1);

      fs.mkdir(imgdir, { recursive: true }, (err2) => {
        if (err2) throw new Error(err2);

        const d2 = new Date() - d1;
        process.stdout.write(`Finished '\x1b[36mbuild:img:clean\x1b[89m\x1b[0m' after \x1b[35m${d2} ms\x1b[89m\x1b[0m\n`);
        resolve();
      });
    });
  });
}

/**
 * Copies all the project images in the ./img folder.
 *
 * @function (arg1)
 * @private
 * @param {function}        the function to call at the completion,
 * @returns {}              -,
 * @since 0.0.0
 */
function _cpimg(done) {
  const d1 = new Date();
  process.stdout.write('Starting \'\x1b[36mbuild:img:copy\x1b[89m\x1b[0m\'...\n');

  let pending = config.img.length;
  const _next = function() {
    pending -= 1;
    if (!pending) {
      const d2 = new Date() - d1;
      process.stdout.write(`Finished '\x1b[36mbuild:img:copy\x1b[89m\x1b[0m' after \x1b[35m${d2} ms\x1b[89m\x1b[0m\n`);
      done();
    }
  };

  for (let i = 0; i < config.img.length; i++) {
    const name = path.basename(config.img[i]);
    fs.copyFile(`./src/img/${name}`, `${imgdir}/${name}`, (err) => {
      if (err) throw err;
      _next();
    });
  }
}


// -- Main ---------------------------------------------------------------------

/**
 * Executes the script.
 *
 * @function ()
 * @public
 * @param {}                -,
 * @returns {}              -,
 * @since 0.0.0
 */
async function run() {
  const PENDING = 1;

  if (parsed.help) {
    _help();
    return;
  }

  if (parsed.version) {
    process.stdout.write(`version: ${parsed.version}\n`);
    return;
  }

  const d1 = new Date();
  process.stdout.write('Starting \'\x1b[36mbuild:img\x1b[89m\x1b[0m\'...\n');

  let pending = PENDING;
  /**
   * Executes done until completion.
   */
  function done() {
    pending -= 1;
    if (!pending) {
      const d2 = new Date() - d1;
      process.stdout.write(`Finished '\x1b[36mbuild:img\x1b[89m\x1b[0m' after \x1b[35m${d2} ms\x1b[89m\x1b[0m\n`);
    }
  }

  await _clean();
  _cpimg(done);
}


// Start script.
run();


// -- oOo --
