const repeatString = function(string , num) {
    let i = 1;
    let container = "ERROR";
    if(num>=0){
        container = '';
        while(i <= num){
            container += string;
            i++;
        }
    }
    return container;
};

// Do not edit below this line
module.exports = repeatString;
