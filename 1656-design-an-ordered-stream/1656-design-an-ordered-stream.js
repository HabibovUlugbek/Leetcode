var OrderedStream = function(n) {
   this.pointer = 1;
  this.temp = {};
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
  let chunk = [];
  this.temp[idKey] = value;
  while (this.temp[this.pointer]) {
    chunk.push(this.temp[this.pointer]);
    this.pointer++;
  }
  return chunk;
};