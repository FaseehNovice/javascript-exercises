const removeFromArray = function(array) {
    let numberOfArgs = arguments.length;
    let count;
    let size = array.length;
    for(let i = 0 ; i <  size ; i++){
        count = 0;
        while(count <= numberOfArgs - 1){
            if(array[i] === arguments[count]){
                array.splice(i,1);
                i--;
            }
            count++;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
