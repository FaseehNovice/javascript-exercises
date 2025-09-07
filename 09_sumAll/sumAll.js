const sumAll = function(a,b) {
    let sum = 0;
    let max = 0;
    let min = 0;
    if( Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0){
        a > b ? max = a: max = b;
        a > b ? min = b : min = a;
        for(let i = min; i <= max; i++){
            sum+=i;
        }
        return sum;
    }
    else
        return "ERROR"
};

// Do not edit below this line
module.exports = sumAll;
