/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
        const x = new Date('2013-'+arriveAlice);
        const y = new Date('2013-'+arriveBob);
        const arrive = x > y ? x : y;
        const a = new Date('2013-'+leaveAlice);
        const b = new Date('2013-'+leaveBob);
        const leave = a<b ? a : b;
        // To calculate the time difference of two dates
        var Difference_In_Time = leave.getTime() - arrive.getTime();
  
        // To calculate the no. of days between two dates
        var days = Difference_In_Time / (1000 * 3600 * 24);
    return days < 0  ? 0 : days+1;
};