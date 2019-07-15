function differentSquares(matrix) {

  var box = [];
  var boxes = [];
  
  for(var i = 0; i < matrix.length-1; i++){
    for(var j = 0; j < matrix[i].length-1; j++){
      box.push(matrix[i][j]);
      box.push(matrix[i][j+1]);
      box.push(matrix[i+1][j]);
      box.push(matrix[i+1][j+1]);
      boxes.push(box.join(""));
      box = [];
    }
    
  }
  console.log(boxes.length);
  var count = 0;
  for(var i = 0; i < boxes.length; i++){
    for(var j = i+1; j < boxes.length; j++){
      if(boxes[i] == boxes[j]){
        console.log(boxes[j]);
        boxes.splice(j,1);   
      }
    }
  }
  
  if(boxes[0] == boxes[1] && boxes.length > 1){
     return 1;
  }else{
     return boxes.length;
  }
  //return boxes[0] == boxes[1];

}