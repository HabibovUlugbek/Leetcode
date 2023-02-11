/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    time = time.split("")
    if(time[0] === "?") {
        if(Number(time[1]) > 3) time[0] = "1"
        else time[0] = "2"
    }
    if(time[1] === "?") {
        if(time[0] === "2") time[1] = "3"
        else time[1] = "9"
    }
    if(time[3] === "?") time[3] = "5"
    if(time[4] === "?") time[4] = "9"
    
    return time.join("")
};