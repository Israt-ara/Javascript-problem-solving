// check leap year
function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return "Leap year";
    }
    else {
        return "Is not Leap year";
    }
}
console.log(isLeapYear(2022));
