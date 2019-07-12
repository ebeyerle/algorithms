function lateRide(n) {
    let hours = Math.floor(n / 60).toString().split("");
    let minutes = (n % 60).toString().split("");
    let res = 0;
    if(hours.length > 1) {
        res += (parseInt(hours[0]) + parseInt(hours[1]));
    } else if (hours.length > 0) {
        res += parseInt(hours[0]);
    }
    
    if(minutes.length > 1) {
        res += (parseInt(minutes[0]) + parseInt(minutes[1]));
    } else if (minutes.length > 0) {
        res += parseInt(minutes[0]);
    }
    
    return res;
}