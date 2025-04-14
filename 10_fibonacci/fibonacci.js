const fibonacci = function(n) {
    const num = parseInt(n);
    let n1 = 0, n2 = 1, fn;
    for (let i = 1; i <= num; i++){
        fn = n1 + n2;
        n1 = n2;
        n2 = fn;
    }
    if (num < 0){
        return "OOPS"
    }
    return n1;
    
};

// Do not edit below this line
module.exports = fibonacci;
