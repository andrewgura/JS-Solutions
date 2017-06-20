/*
Format any phone number to return in (xxx)xxx-xxxx Format
Inputs can be given in xxxxxxxxxx, xxx-xxx-xxxx, (xxx)xxx-xxxx, etc
*/

function phoneNum(num) {
  if (num.length < 10) {
    console.log("Please include your zip code")
  } else {
    format = num.replace(/[(-)-]/g, "");
    format = "(" + format.slice(0, 3) + ")" + format.slice(3, 6) + "-" + format.slice(6, 10)
    console.log(format)
  }
}


phoneNum("123-321-1234");
phoneNum("123-3211234");
phoneNum("123-321-1234");
phoneNum("(123)-321-1234");
phoneNum("(123)321-1234"); //will return same input in this format
