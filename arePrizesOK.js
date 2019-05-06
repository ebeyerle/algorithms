function arePrizesOK(first, second, third) {

  if(first >= second && second >= third){
    return true;   
  }else{
    return false;
  }
}
