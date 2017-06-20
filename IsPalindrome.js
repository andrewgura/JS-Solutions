/*
Check to see if a word is a palindrome, spelled same as it is backwords
*/

function isPalindrome(x) {
  var x = x.toUpperCase(); //Incase input isnt all lowercase/uppercase
  var rev = x.toUpperCase().split("").reverse().join(""); //converts to an array, then reverses that array, then joins together at the ""
  if (rev === x) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar")); //true test
console.log(isPalindrome("race")); //false test
