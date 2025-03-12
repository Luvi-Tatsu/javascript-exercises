const sumAll = function(start, end) {
let min = Math.min(start,end);
let max = Math.max (start,end);
let sum = 0;
if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
if (start < 0 || end < 0) return "ERROR";
for (i = min; i <= max; i++){
    sum += i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
