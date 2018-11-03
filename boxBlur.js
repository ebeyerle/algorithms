function boxBlur(image) {

    var arr = new Array(image.length-2);
    
    for(var i = 0; i < image.length-2; i++){
        arr[i] = new Array(image[0].length-2);
        for(var j = 0; j < image[i].length-2; j++){
            arr[i][j] = image[i][j] + image[i][j+1] + image[i][j+2] + 
                        image[i+1][j] + image[i+1][j+1] + image[i+1][j+2] +
                        image[i+2][j] + image[i+2][j+1] + image[i+2][j+2];
            arr[i][j] = Math.floor(arr[i][j]/9);
        }
    }
    
    return arr;
}
