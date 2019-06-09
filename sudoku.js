function sudoku(grid) {

  var colArr = [];
  var sqArr = [];
  var arr = [];
  var newArr = [];
  var count = 0;
  
  //Getting the row values
  for(var i = 0; i < grid.length; i++){
    arr.push(grid[i]);
  }
  
  //Getting the column values
  for(var i = 0; i < grid.length; i++){
    colArr = [];
    for(var j = 0; j < grid.length; j++){
      colArr.push(grid[j][i]);
    }
    arr.push(colArr);
  }
  
  //Getting the square values
  for(var i = 0; i <= grid.length-3; i++){
    for(var j = 0; j <= grid.length-3; j++){
      sqArr = [];
      sqArr.push(grid[i][j]);
      sqArr.push(grid[i][j+1]);
      sqArr.push(grid[i][j+2]);
      sqArr.push(grid[i+1][j]);
      sqArr.push(grid[i+1][j+1]);
      sqArr.push(grid[i+1][j+2]);
      sqArr.push(grid[i+2][j]);
      sqArr.push(grid[i+2][j+1]);
      sqArr.push(grid[i+2][j+2]);
      arr.push(sqArr);
      j += 2;
    }
    i += 2;
  }
  
  //Function used to check for unique values
  const distinct = (value, index, self) => {
    return self.indexOf(value) == index;
  }  
  
  //Checking each array to make sure they all contain only uniques values
  for(var i = 0; i < arr.length; i++){
    newArr = arr[i].filter(distinct);
    if(newArr.length == arr[i].length){
      count++;
    }
  }
  
  return arr.length == count;
}
