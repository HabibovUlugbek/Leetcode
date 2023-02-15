/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function(passwd) {
    if(!passwd.match(/[A-Z]/)) return false
    if(!passwd.match(/[a-z]/)) return false
    if(!passwd.match(/\d/)) return false;
    if(!passwd.match( /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) return false
    
    if(passwd.length < 8) return false
    for(let i=1; i<passwd.length; i++){
        if(passwd[i] === passwd[i-1]) return false
    }
    return true;
};