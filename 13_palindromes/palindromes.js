const palindromes = function (str) {
    let tempstr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/ /g, "")
    .toLowerCase();

    let left = 0 , right = tempstr.length - 1;
    while(left < right){
        if(tempstr[left] == tempstr[right]){
            left++;
            right--;
        }
        else{
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
