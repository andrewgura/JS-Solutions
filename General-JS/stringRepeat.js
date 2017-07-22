/*
Repeat a string x amount of times, for loop and while loop example
*/

//str is the String to be repeated, num is the amount of times to be repeated
//For loop example
function fRepeat(str, num) {
  for (var i = 0; i < num; i++) {
    console.log(str);
  }
}
fRepeat("abc", 4);


//While loop example
function wRepeat(str, num) {
  var i = 0
  while (i < num) {
    console.log(str)
    i++
  }
}
wRepeat("123", 4);
