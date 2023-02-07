/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    while(students.includes(sandwiches[0])){
        let student = students.shift();
        if(student === sandwiches[0]) {
            sandwiches.shift()
        } else students.push(student)
    }
    
    return students.length
};