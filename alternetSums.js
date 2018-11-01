function alternatingSums(a) {
    var sum1 = 0;
    var sum2 = 0;
    var arrSums = [];
    var pos = 1;
    for(var i = 0; i < a.length; i++){
        if(i % 2 == 0){
            sum2 += a[i];   
        }else{
            sum1 += a[i];
        }
    }
    
    arrSums.push(sum2);
    arrSums.push(sum1);
    
    return arrSums;
}