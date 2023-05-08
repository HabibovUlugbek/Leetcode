var findFrequentTreeSum = function(root) {
    if(!root) return [];
    let obj = {};
    let rec = (root) => {
        if(root){
            let left = rec(root.left);
            let right = rec(root.right);
            let sum = root.val + left + right;
            obj[sum] = (obj[sum] || 0) + 1;
            return sum;
        }
        return 0;   
    }
    rec(root);
    
    let min = -Infinity;
    let out = [];
    for(let i in obj){
        if(obj[i]>min){
            min = obj[i];
            out = [i];
        }
        else if(obj[i]===min){
            out.push(i);
        }
    }
    
    return out;
};