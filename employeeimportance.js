/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
 var GetImportance = function(employees, id) {
    const employee = employees.find(e => e.id === id);

let importanceSum = employee.importance;  

if(employee.subordinates.length) {
    const subs = employees.filter(s => {
        return employee.subordinates.find(es => es === s.id);
    })

    subs.forEach(s => {
        importanceSum += GetImportance(employees, s.id);
    })
}

return importanceSum;
};