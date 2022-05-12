var permuteUnique = function(nums, prefix = [], mem = {}, ret = []) {
    if (!nums.length && !mem[prefix]) {
        ret.push(prefix);
        mem[prefix] = 1;
    }

    nums.forEach((n, i) => permuteUnique(nums.filter((v, j) => i !== j), prefix.concat(n), mem, ret));
    
    return ret;
};