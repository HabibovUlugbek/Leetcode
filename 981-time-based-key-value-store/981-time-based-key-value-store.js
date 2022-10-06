
var TimeMap = function() {
    let database = {}
    this.database = database;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.database[key])  this.database[key].push({value:value,timestamp:timestamp})
    else this.database[key] = [{value:value,timestamp:timestamp}]
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let result = "";
    let data = this.database[key];
    if(!data ) return result;
    let maxtimestamp = -Infinity;
    for(let i=0; i<data.length ;i++){
        if(data[i].timestamp<=timestamp){
            if(maxtimestamp<data[i].timestamp) {
                result = data[i].value;
                maxtimestamp = data[i].timestamp;
            }
        }
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */