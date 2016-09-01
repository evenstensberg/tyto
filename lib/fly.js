const compare = require('./compare')

module.exports = function(obj, fn) {
  return compare(obj, fn)[1]
}
