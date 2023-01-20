
var RecentCounter = function() {
    this.request = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let count = 0;
    this.request.push(t)
    for(let i=0; i<this.request.length; i++){
        if(this.request[i]>=t-3000 & this.request[i]<=t) count++
    }
    return count 
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */