/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(group) {
  const result = []
  const hash = {}
    
  for (let i = 0; i < group.length; i++) {
    const num = group[i]
    
    if (hash[num]) {
      hash[num].push(i)
    } else {
      hash[num] = [i]
    }
    
    if (hash[num].length === num) {
      result.push(hash[num])
      delete hash[num]
    }
  }
    
  return result
};