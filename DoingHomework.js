var busyStudent = function(startTime, endTime, queryTime) {
    var busy=0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime <= queryTime && endTime>=queryTime) {
            busy++
        }
        
    }
    return busy;
};

console.log(busyStudent([16],[60],58))