#!/usr/local/bin/node
var compare = require('./lib/compare')
const repl = require('repl')

repl.start({prompt: '>', eval: myEval, writer: myWriter});
function myEval(cmd, context, filename, callback) {
  callback(null,cmd);
}

function myWriter(output) {
  let fn = function(output) {
    return output*output
  }
  return compare([output.trim()], fn)
}