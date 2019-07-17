function fileNaming(names) {

  var arr = [];
  var list = [];
  var count = 0;
  var temp = "";
  
  for(var i = 0; i < names.length; i++){
    count = 0;
    temp = names[i];
    if(list.indexOf(names[i]) > -1){
      while(list.indexOf(names[i]) > -1){
        count++;
        names[i] = temp + "(" + count + ")";
      }
    }
    list.push(names[i]);
  }
  return list;
}
