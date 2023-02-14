/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = []
    let str = ""
    for(let i= 0 ;i<s.length; i++){
        if(s[i] === ")") {
            
            if(stack.length > 0 && stack[stack.length-1][0] === "("){
                str+=s[i]
                stack.pop()
            }
        }else if(s[i] === "(") {
            stack.push([s[i],str.length])
            str+=s[i]
        }else str+=s[i];
    }
    
     str=str.split("")
        if(stack.length>0){
            for(let i=0 ; i<stack.length; i++){
                str[stack[i][1]]=""
            }
        }
    
    return str.join("");
};