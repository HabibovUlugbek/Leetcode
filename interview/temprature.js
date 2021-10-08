var dailyTemperatures = function(temperatures) {
    var days=[]
    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i+1; j < temperatures.length; j++) {
            if(temperatures[i] < temperatures[j]) {
                days.push(j-i)
                break;
            }else if(j=== temperatures.length -1){
                days.push(0)
            }
        }
    }
    days.push(0)
    return days;
};

console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))