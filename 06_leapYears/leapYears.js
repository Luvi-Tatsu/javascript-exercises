const leapYears = function(leapYear) {

if (leapYear % 4 != 0 || leapYear % 400 !=0 && leapYear % 100 === 0){
    return false;
}
else {
    return true;
}
};

// Do not edit below this line
module.exports = leapYears;
