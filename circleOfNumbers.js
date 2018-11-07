function circleOfNumbers(n, firstNumber) {
  if(firstNumber < n/2){
    return (n/2)+firstNumber;
  }else if(firstNumber == n/2){
    return 0;
  }else{
    return ((n/2)-firstNumber)*-1;
  } 
}