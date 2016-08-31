# <a href='https://github.com/ev1stensberg/tyto'><img src="https://s21.postimg.org/44hwqa7s7/tyto.png" align="left" height="180" "/></a>
#:maple_leaf: <a href='https://github.com/ev1stensberg/tyto'>Tyto<a/> :maple_leaf:

[![NPM](https://nodei.co/npm/tyto.png)](https://npmjs.org/package/tyto)
***
##:deciduous_tree: How to Use this module :deciduous_tree:

Tyto is a small module, that will output what has happend to your object before and after running an function on it. It will not modify the object you pass into as arguments. This is a great way to test any changes to your object.
***
Your function could be any function, but testing tyto in the CLI right now only multiplies what you type with itself and outputs based on that.
If you have any bugs or issues, please, do [file an issue](https://github.com/ev1stensberg/tyto/issues).

##local installation

###### :cyclone: `npm install --save tyto` :cyclone:

##CLI

###### :evergreen_tree: `sudo npm install -g tyto` :evergreen_tree:

#Local Usage

```js
const tyto = require('tyto');
const out = tyto([2,4,6,8,10], (num) => (num*num))
// outputs [[2,4,6,8,10], [4, 16, 36, 64, 100]]
// Before: out[0] After: out[1]
```
#CLI Usage

######:warning: Make sure you've installed using `sudo npm install -g tyto`

1. Open terminal and type `tyto`
2. Write any number and watch the output.
3. First value is what you got before and the other one was the one you have modified

######Note that we only multiply the number you enter, as for now. We are planning to let you make your own functions using the repl

#API 

##compare(obj, fn)

- Obj<Array | Object> - Array or Object, that you are modifying with the second argument
- fn<Function> - Function you are modifying first argument with

###### Returns: <Array> First array with the initial `value[0]` and second `value[1]` is the one that has been modifyed

##fly(obj, fn)

- Obj<Array | Object> - Array or Object, that you are modifying with the second argument
- fn<Function> - Function you are modifying first argument with

###### Returns: <Array> an array with the returned value of changes to your object

##flap(obj, fn)

- Obj<Array | Object> - Array or Object, that you are modifying with the second argument
- fn<Function> - Function you are modifying first argument with

###### Returns: <Array> an array with the initial values of the object

