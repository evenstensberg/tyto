const compare = require('./compare')

//return second element in the compare func, meaning the applied change
module.exports = function(obj, fn) {
  return compare(obj, fn)[1]
}
