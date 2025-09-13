const add = function() {
	let argNo = arguments.length;
  let i = 0,sum = 0;
  while( i < argNo){
    sum += arguments[i];
    i++;
  }
  return sum;
};

const subtract = function() {
  let argNo = arguments.length;
  let i = 1,subtracted = arguments[0];
  while( i < argNo){
    subtracted -= arguments[i];
    i++;
  }
  return subtracted;
	
};

const sum = function(array) {
  if(array.length == 0)
    return 0;
  return array.reduce((acc,item) => acc + item , 0)
	
};

const multiply = function(array) {
  return array.reduce((acc, num) => acc * num ,1)
};

const power = function(a,b) {
	let i = 0 , power = 1; 
  while (i < b) {
    power *= a;
    i++;
  }
  return power;
};

const factorial = function(a) {
  if(a == 0 || a == 1){
    return 1;
  }
  let factorial = 1;
  while( a > 0){
    factorial *= a;
    a--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
