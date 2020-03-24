// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


// Primitives
// Number -> '3'
// String -> '"hello"'
// boolean → 'true' 'false'
// undefined → undefined
// symbol
// null → 'null'

var stringifyJSON = function(obj) {

  // if obj is Primitive: number, string, boolean, undefined, null, (symbol)
  if (obj === null || typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (obj === undefined) {
    return undefined;
  }

  // if obj is Array
  if ( (Object.getPrototypeOf(obj) === Array.prototype) ) {
    var resultarr = [];
    // Base Case included
    obj.forEach(function(el) {
      resultarr.push( stringifyJSON(el) );
    });

    return `[${resultarr}]`;
  }

  // if obj is Object
  // similar to array. but with keys and values

  // get keys
  var objKeyarr = [];
  var objValarr = [];
  var arrKeyValPair = [];

  var result = '{'; // result is a string that we want to build on
  for (const [key, val] of Object.entries(obj)) {
    result = result + stringifyJSON(key) + ':' + stringifyJSON(val) + '}'; // keyval part;
    // console.log(result);
  }

  // get keys
  objKeyarr = Object.keys(obj);
  // for each key,
  objKeyarr.forEach(function(key) {
    // get key stringified
    var resultKey = `"${key}":`;
    // get key's value
    var resultVal = (obj[key]);
    // put key:value pair into an array to stringify
    // hint: JSON does not allow you to stringify functions or
    // undefined values, so you should skip those key/value pairs.
    if (typeof resultVal === 'function' || resultVal === undefined) {
      arrKeyValPair.push();
    } else {
      arrKeyValPair.push(resultKey + stringifyJSON(resultVal));
    }

  });

  return `{${(arrKeyValPair)}}`;



};
