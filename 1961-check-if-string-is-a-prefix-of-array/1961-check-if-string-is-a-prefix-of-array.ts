function isPrefixString(s: string, words: string[]): boolean {
    let str="";
    for(let i=0; i<words.length; i++){
        str +=words[i]
        if(str.length> s.length) return false;
        else if(str.length === s.length) return s === str ? true : false
        
    }
    return false;
};