function isLucky(n) {
    var x = n.toString().split("");
    var sum1 = 0;
    var sum2 = 0;
    
    if((x.length % 2) == 0){
        for(var i = 0; i < x.length/2; i++){
            sum1 += parseInt(x[i]);
            sum2 += parseInt(x[(x.length-1)-i]);
        }
        if(sum1 == sum2){
           return true;
        }else{
           return false;
        }
    }else{
        return false;
    }
}
