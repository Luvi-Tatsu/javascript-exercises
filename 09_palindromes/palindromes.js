const palindromes = function (str) {
    let noSpace = /[\W_]/g;
    let switchedStr = str.toLowerCase().replace(noSpace, '');
    let palindromes = switchedStr.split('').reverse().join('');
    return palindromes === switchedStr;
};

// Do not edit below this line
module.exports = palindromes;
