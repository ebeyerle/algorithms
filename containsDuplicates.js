function containsDuplicates(a) {

  var h = new Object();
  
  for(var i = 0; i < a.length; i++){
    if(!h[a[i]]){
       h[a[i]] = 1;
    }else{
      return true;
    }
  }
  
  return false;
}