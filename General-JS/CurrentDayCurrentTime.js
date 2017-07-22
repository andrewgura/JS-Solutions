//Display Today's date as mm/dd/yyyy
var date = new Date();
var mon = date.getMonth() + 1; //January starts at 0
var day = date.getDate();
var year = date.getFullYear();

//Makes month display as 05, instead of 5
if (mon < 10) {
  mon = "0" + mon
}
//Makes day display as 05, instead of 5
if (day < 10) {
  day = "0" + day
}

date = mon + "/" + day + "/" + year;

console.log("Todays date is " + date);

//Display current time as : h:mm:ss
var time = new Date();
var h = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

//Makes minutes display as 05, instead of 5
if (min < 10) {
  min = "0" + min
}

//Makes seconds display as 05, instead of 5
if (sec < 10) {
  sec = "0" + sec
}


time = h + ":" + min + ":" + sec;
console.log("The time right now is " + time)
