
var MinStack = function() {

    this.stack = []
    this.length = 0
    };
    
    /**
    
    @param {number} val
    @return {void}
    */
    MinStack.prototype.push = function(val) {
    this.stack.push(val)
    this.length++
    };
    /**
    
    @return {void}
    */
    MinStack.prototype.pop = function() {
    
    this.stack.pop()
    this.length--
    
    };
    
    /**
    
    @return {number}
    */
    MinStack.prototype.top = function() {
    
    return this.stack[this.length - 1]
    };
    
    /**
    
    @return {number}
    */
    MinStack.prototype.getMin = function() {
    
    let min = Number.MAX_VALUE
    for(let i = 0 ; i < this.length ; i++){
    if(this.stack[i] < min){
    min = this.stack[i]
    }
    }
    return min
    };