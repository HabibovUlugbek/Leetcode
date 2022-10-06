var TimeMap = function () {
  this.map = new Map()
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map.has(key)) this.map.get(key).push({ value, timestamp })
  else this.map.set(key, [{ value, timestamp }])
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (this.map.has(key)) {
    let arr = this.map.get(key),
      start = 0,
      end = arr.length - 1
    while (start < end) {
      let mid = Math.ceil((start + end) / 2)
      if (arr[mid].timestamp > timestamp) end = mid - 1
      else start = mid
    }
    if (arr[start].timestamp <= timestamp) return arr[start].value
  }
  return ''
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */