
const repeatString = function(string, num) {
let reapetedString = "";
if (num === -1)
    return "ERROR";
 while (num > 0){
  reapetedString += string;
  num--;
 }
 return reapetedString;
};


// Do not edit below this line
module.exports = repeatString;
