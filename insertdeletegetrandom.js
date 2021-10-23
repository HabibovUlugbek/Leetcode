/*
Approach: Keep a map/dictionary 'map' and an array 'arr'
To return random number we will generate a rand integer from 0 to arr.length-1 and will return the element at that index
In 'map', the number to be inserted will become the key and the index it takes in 'arr' will become its value in 'map'
To delete a value from 'arr' in O(1), we will copy the last element at the index which needs to be deleted and then pop last element from the array.  
*/
var RandomizedSet = function() {
    this.map=[];
    this.arr=[];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(this.map[val]!==undefined){
        return false;
    }
    this.map[val] = this.arr.length;
    this.arr.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.map[val]===undefined){
        return false;
    }
    let index = this.map[val];
    let lastIndex = this.arr.length-1;
    this.arr[index] = this.arr[lastIndex];//Override element at index with the last element
    this.map[this.arr[index]] = index;//Change index of last element in the map
    this.arr.pop();//Remove last element
    delete this.map[val];
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randIndex = getRandomInt(0,this.arr.length-1);
    //Function to get random number from min to max 
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return this.arr[randIndex];
};