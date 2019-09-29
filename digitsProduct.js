function digitsProduct(product) {

  var i = 0;
  var j = 0;
  var arr = [];
  
  if(product < 10){
    return ((product+10 % 2) == 0)?product+10:product;
  }
  
  for(i = 9; i > 1; i--){
    while(product % i == 0){
      console.log("here");
      product = product/i;
      arr[j] = i;
      j++;
    }
  }
  
  var line = "";
  
  for(var j = arr.length-1; j >= 0; j--){
    line += arr[j];
  }
  
  if(product > 10){
    return -1;
  }
  
  return parseInt(line);
  
}