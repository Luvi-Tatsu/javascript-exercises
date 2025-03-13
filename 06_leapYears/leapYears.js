const leapYears = function(year) {
const yearDevisibleByFour = year % 4 === 0;
const butNotInCentury = year % 100 === 0;
const yearDevisbleByFourCenturies = year % 400 === 0;


if (yearDevisibleByFour && !butNotInCentury || yearDevisbleByFourCenturies){
    return true;
}
else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
