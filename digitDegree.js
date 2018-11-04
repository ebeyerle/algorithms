function digitDegree(n) {
  var sum = 0;
  var count = 0;
  if(n < 10){
     return 0;
  }else{
    while(n >= 10){
      while(n != 0){
        sum = sum + Math.floor(n % 10);
        console.log(sum);
        n = Math.floor(n/10);
      }
      count++;
      n = sum;
    } 
  }
  
  return count;
}