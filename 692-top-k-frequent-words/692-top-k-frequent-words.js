
var topKFrequent =(words, k) => {
    var map = new Map(); 
    
    words.forEach(n => map.set(n, map.get(n) + 1 || 1));  
    let sort = [...map].sort((a,b) => {
                    if (a[1]===b[1]) {
                        if (a[0] < b[0]) return -1;
                    }
                    else return b[1]-a[1];
                    }).slice(0,k).map(word => word[0]); 
    return sort;
};