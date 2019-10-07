function deleteDigit(n) {
  
  var arr = [];
  var temp = [];
  var digits = n.toString().split("");
  var number = "";
  
  for(var i = 0; i < digits.length; i++){
    for(var j = 0; j < digits.length; j++){
      if(i != j){
         number += digits[j];
      }
    }
    arr.push(parseInt(number));
    number = "";
  }

  return Math.max(...arr);
}