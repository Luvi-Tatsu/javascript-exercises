const removeFromArray = function(kit, ...nam) {
    return kit.filter(args => !nam.includes(args));
   
}
removeFromArray([1, 2, 3, 4], 3);


// Do not edit below this line
module.exports = removeFromArray;
