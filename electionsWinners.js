function electionsWinners(votes, k) {

  var max = 0;
  var count = 0;
  
  for(var i = 0; i < votes.length; i++){
    if(votes[i] > max){max = votes[i];}
  }
  
  var maxCount = 0;
  
  for(var i = 0; i < votes.length; i++){
    if((votes[i] + k) > max){
       count++;
    }
    if(k == 0){
      if(votes[i] == max){maxCount++}
    }
  }
  
  if(maxCount == 1){count++;}
  
  return count;
}