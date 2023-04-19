var AllOne = function() {
    this.map = new Map()
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function(key) {
    let count = this.map.get(key) || 0
    this.map.set(key, count + 1)
};

/** 
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function(key) {
    let count = this.map.get(key)
    if (count === 1) {
        this.map.delete(key)
    }
    if (count > 1) {
        this.map.set(key, count - 1)
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function() {
    let max = 0
    let maxKey = ''
    for (let [key, count] of this.map) {
        if (count > max) {
            max = count
            maxKey = key
        }
    }
    return maxKey
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function() {
    let min = Infinity
    let minKey = ''
    for (let [key, count] of this.map) {
        if (count < min) {
            min = count
            minKey = key
        }
    }
    return minKey
};