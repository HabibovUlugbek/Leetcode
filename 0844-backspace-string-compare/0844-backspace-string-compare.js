/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i=0; 
    let stack1 = [];
    while(i<s.length){
        if(s[i] === "#"){
            if(stack1.length >0 ) stack1.pop()  
        }else stack1.push(s[i])
        i++;
    }
    
    i=0;
    let stack2 = []
    while(i<t.length){
        if(t[i] === "#") {
            if(stack2.length >0 ) stack2.pop()   
        }else stack2.push(t[i])
        i++
    }
    return stack1.join("") === stack2.join("")
};