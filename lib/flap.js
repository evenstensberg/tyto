const compare = require('./compare')

// return first obj, the value you started with
module.exports = function(obj, fn) {
  return compare(obj, fn)[0]
}
