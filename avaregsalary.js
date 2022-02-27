/**
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    salary = salary.sort((a,b) => a-b);
    let result  = salary.reduce((prev,curr) => prev +=curr);
    result = (result - salary[0] - salary [salary.length-1])/(salary.length-2);
    return result.toFixed(5);
};