const fibonacci = function(input) {
    let toIntInput = parseInt(input) , i = 1 , prevNum = 1 , Num = 1 , fibNum = 0;
    if( toIntInput < 0)
        return "OOPS";
    if(toIntInput == 2)
        return 1;

    while( i < toIntInput - 1){
        fibNum = prevNum + Num ;
        prevNum = Num;
        Num = fibNum;
        i++;
    }
    if(toIntInput == 0 || toIntInput == 1)
        return toIntInput;

    return fibNum;

};

// Do not edit below this line
module.exports = fibonacci;
