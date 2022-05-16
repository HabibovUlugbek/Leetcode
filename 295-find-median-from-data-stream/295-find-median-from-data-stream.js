var MedianFinder = function() {
  this.arr = [];  
};

MedianFinder.prototype.addNum = function(num) {
    
    let ary = this.arr;
    
    for(let n = 0; n < ary.length; n++){
        if(ary[n] > num){
            return ary.splice(n, 0, num);
        }
    }
    ary.push(num);
};

MedianFinder.prototype.findMedian = function() {
    let len = this.arr.length;
    if(len%2!=0) return this.arr[Math.floor(len/2)];
    return (this.arr[len/2] + this.arr[(len/2)-1])/2;
    
};