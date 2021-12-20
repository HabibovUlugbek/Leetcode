var minimumAbsDifference = function(arr) {
    const ans = [];
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
      minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
    }
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - arr[i - 1] === minDiff) ans.push([arr[i - 1], arr[i]]);
    }
    return ans;
  };