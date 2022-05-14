/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    return queries.map(query => {
       A[query[1]] += query[0]
      return A.reduce((acc, cur) => cur % 2 ? acc : acc+cur, 0)
    })
};