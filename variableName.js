function variableName(name) {

  if(!((name[0] <= 'z' && name[0] >= 'a') || (name[0] <= 'Z' && name[0] >= 'A') || name[0] == '_')){
     return false;
  }
  
  for(var i = 0; i < name.length; i++){
    if(!((name[i] <= 'z' && name[i] >= 'a') || (name[i] <= 'Z' && name[i] >= 'A') || name[i] == '_' || (name[i] <= '9' && name[i] >= '0'))){
       return false;
    }
  }
  return true;
}
