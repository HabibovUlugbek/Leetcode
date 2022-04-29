/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
   let m2 = new Map()
 for(let i = 0; i< words.length; i++){
     m2.set(words[i] , (m2.get(words[i]) || 0 ) + 1)
 }
    let ans= []
    let m1  = new Map()
 let len =  words.length  * words[0].length
for(let i = 0  ; i< s.length-len+1; i++){
 let curr = s.substring(i, i+len)
     if(check(curr, m2, words[0].length)) ans.push(i)
}
return ans
}
    function check(curr, m2, length){
        let m1 =  new Map()
        for(let i = 0; i< curr.length; i+=length){
            let sub = curr.substring(i, i+length)
            m1.set(sub, (m1.get(sub)|| 0 ) +1 )
        }
          for(let [key, val] of  m2){
            if(m1.get(key) !== m2.get(key)) return false
        }
        return true
    }
