function isBeautifulString(inputString) {
  //Split the the string into an array and then sort it
  var letters = inputString.split("");
  letters.sort();
  
  //Initialize the variables for the 2 arrays, arr1 will be used to hold each unique character
  //arr2 will hold the number of occurances for each different character
  var arr2 = [];  
  var arr1 = [];
  //Varaible that will be used in the for loop that will go through each number and make sure the
  //next letter is not greater than the previous one
  var prev = 0;
  var charCode = 97;
  
  //Store values for arr1 and arr2
  for(var i = 0; i < letters.length; i++){
    if(letters[i] !== prev){
      arr1.push(letters[i]);
      arr2.push(1);
    }else{
      arr2[arr2.length-1]++;
    }
    prev = letters[i];
  }

  //Checking to make sure the occurances for each letter is not greater than the previous one
  for(var i = 0; i < arr1.length; i++){
    if(arr1[i] == String.fromCharCode(charCode)){
       if(arr2[i] < arr2[i+1]){
         return false;
       }else{
         charCode++;
       }
    }else if(arr1[i] !== String.fromCharCode(charCode)){
      return false;    
    }
  }
  
  return true;
}
