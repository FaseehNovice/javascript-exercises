const reverseString = function(string) {
    const myArray = string.split("");
    const reversedArray = []
    const size = myArray.length
    for(let i = size ; i >= 0 ; i--){
        reversedArray.push(myArray.pop());
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
