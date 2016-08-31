const compare = require('./compare')

module.exports = function(obj, fn) {
  let ob = compare(obj, fn)
  return ob[1]
}
