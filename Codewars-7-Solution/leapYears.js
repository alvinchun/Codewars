function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
  }

  function isLeapYear(year) {
    if(0 == year%400) return true;
    if(0 == year%100) return false;
    if(0 == year%4) return true;
    return false;
  }

  const moment = require('moment');

function isLeapYear(year) {
  return moment([year]).isLeapYear()
}

const isLeapYear = year => new Date(year, 1, 29).getDate() == 29;

function isLeapYear(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
  }

  function isLeapYear(y) {
    if (y % 400 == 0) return true
    if (y % 100 == 0) return false
    if (y % 4 == 0) return true
    return false
  }


  console.log(highAndLow22("1 2 3 4 5")); // return "5 1"
