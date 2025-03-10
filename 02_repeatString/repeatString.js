
const number = Math.floor(Math.random() * 1000);
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
repeatString('', 10);

// Do not edit below this line
module.exports = repeatString;
