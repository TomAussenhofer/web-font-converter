'use strict';

const read  = require('fs').readFileSync;
const write = require('fs').writeFileSync;
const join   = require('path').join;
const wawoff2 = require('wawoff2');

const inputFile = process.argv[2];

if (inputFile.indexOf('.ttf') == -1) {
  console.error('Input file name does not have .ttf ending.');
}

const srcFolder = inputFile.split(/(?!.+\/)(?:.+)/g)[0];
const fileName = inputFile.split(/.+\//g)[1].split(/\.ttf/g)[0];

if (!process.argv[3]) {
  console.log('No output file specified. Using input source path as destination and input file name as output file name.')
}

const outputFile = process.argv[3] || `${ srcFolder }/${ fileName }`;

const sample = Uint8Array.from(read(inputFile));

// create .woff
const ttf2woff = require('ttf2woff');
write(outputFile + '.woff', ttf2woff(sample).buffer, { encoding: 'utf-8' });

// create .woff2
wawoff2.compress(sample).then(out => {
  write(outputFile + '.woff2', out, { encoding: 'utf8' });
});

// create .eot
const ttf2eot = require('ttf2eot');
write(outputFile + '.eot', ttf2eot(sample).buffer, { encoding: 'utf-8' });

// special thanks to Vitaly Puzrin for creating all necessary libraries.