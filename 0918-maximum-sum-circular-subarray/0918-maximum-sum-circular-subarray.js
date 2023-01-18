var maxSubarraySumCircular = function(A) {
  let maxSum, max, minSum, min, total
  maxSum = max = minSum = min= total = A[0]
  
  for(let i=1;i<A.length;i++){
    const n = A[i]
    max = Math.max(n, n+max)
    maxSum = Math.max(max, maxSum)
    min = Math.min(n, n+min)
    minSum = Math.min(min, minSum)
    total += n
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
};