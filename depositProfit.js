function depositProfit(deposit, rate, threshold) {

  var yearCount = 0;
  rate = (rate/100)+1;
  
  while(deposit < threshold){
    deposit *= rate;
    yearCount++;
  }
  
  return yearCount;
}
