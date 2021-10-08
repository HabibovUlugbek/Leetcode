/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    s = s.toLowerCase()
    
    var first = s.slice(0,s.length/2)
    var second = s.slice((s.length/2), s.length)
    
   first= first.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("u","").replaceAll("o","");
   second = second.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("u","").replaceAll("o","");
    console.log(first, "-", second )
    if(first.length === second.length) return true
    
    return false
};