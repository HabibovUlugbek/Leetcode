/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    stamp= stamp.split("")
    target = target.split("");
    let count = 0;
    let visited = new Array(target.length).fill(false);
    let res = [];
    
    
    function canReplace(pos){
        for(let i=0 ; i< stamp.length; i++){
            if(target[i+pos] !== "?" && target[i+pos] !== stamp[i] ) return false
        }
        return true;
    }

    function replace(pos){
        for(let i=0 ;i<stamp.length;i++){
            if(target[i+pos] !== "?") {
                target[i+pos] = "?"
                count++;
            }
        }
    }
    
    while(count !== target.length){
        let didChange = false;
        for(let i=0; i<= target.length - stamp.length; i++){
            if(!visited[i] && canReplace(i)){
               replace(i);
               visited[i] = true;
               didChange = true
               res.push(i);
                
               if(count === target.length ) break;
            }
        }
        if(!didChange) return []
    }
    
    return res.reverse()
    
};

