var combine = function(n, k) {
    let result =[];
    let combinations=[];
    helper(1,n,k);
    return result;
    
    function helper(startIndex,n,k){
        if(combinations.length===k){
            result.push([...combinations])
            return
        }
        
        for(let i=startIndex; i<=n; i++){
            combinations.push(i);
            helper(i+1,n,k)
            combinations.pop()
        }
    }
};