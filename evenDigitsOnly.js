function evenDigitsOnly(n) {

  var str = n.toString();
  var m = str.split("");
  var bool = true;
  
  for(var i = 0; i < m.length; i++){
    if(m[i] % 2 != 0){
       bool = false;
    }
  }
  
  return bool;
}
