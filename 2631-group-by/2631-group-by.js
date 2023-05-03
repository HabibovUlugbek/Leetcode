/**
 * @param {Function} fn
 * @return {Array}
 */
Array.prototype.groupBy = function(fn) {
    
  const nums = this;
  const res = {};
   
   for(let obj of nums){
     let _ID = fn(obj)
    if(!res.hasOwnProperty(_ID)){
      res[_ID] = [obj];
    }else{
      res[_ID].push(obj);
    }
   }
  return res;
};
/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */