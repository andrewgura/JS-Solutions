/*
Reverse a number
*/

function reverse(x) {
  var b = x.toString().split("").reverse().join(""); //Changes number to a string, then reverses it
  b = Number(b); // changes the reversed string back into a number
  return b;
}

console.log(reverse(45))
