function lineEncoding(s) {

  var line = s.split("");
  var encoded = "";
  var count = 1;
  
  for(var i = 0; i < line.length; i++){
    if(line[i] != line[i+1]){
      if(count == 1){
        encoded += line[i];
      }else{
        encoded += count + line[i];
        count = 1;
      }
    }else if(line[i] == line[i+1]){
      count++;
    }
  }
  
  return encoded;
}