/*
Print 1- 100 and if the number is divisble by 3, print foo, if divisble by 5, print bar
if divisble by both 3 and 5, print foobar, otherwise print the number
*/


//Solving using only if statements
for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("foobar");
  } else if (i % 3 == 0) {
    console.log("foo");
  } else if (i % 5 == 0) {
    console.log("bar");
  } else {
    console.log(i);
  }
}


//Solving with minimal lines of code
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "foo";
  if (n % 5 == 0)
    output += "bar";
  console.log(output || n);
}
