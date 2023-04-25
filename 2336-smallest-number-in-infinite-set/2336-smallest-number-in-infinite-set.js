
var SmallestInfiniteSet = function() {
    this.last = 1
    this.add = [];
    
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    this.add = this.add.sort((a,b) => a -b)
    if(this.add[0]<=this.last) return this.add.shift()
    else {
        return this.last++
    }
    
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
     if(this.last > num && !this.add.includes(num)) this.add.push(num)   
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */