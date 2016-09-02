#!/usr/local/bin/node
const compare = require('./main').compare
const repl = require('repl');

// needs to output a customized, function based by user input
repl.start({prompt: '>', eval: myEval, writer: myWriter});

function myEval(cmd, context, filename, callback) {
  callback(null,cmd);
};

function myWriter(output) {
  let fn = function(output) {
    return output*output;
  }
  return compare([output.trim()], fn);
};
