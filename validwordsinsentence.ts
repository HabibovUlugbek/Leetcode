function countValidWords(sentence: string): number {
    let list:string[]=sentence.split(' ')
    let filtered:string[]=list.filter(s=>{
        if(/\d/.test(s) || s=='') return false     
        if(/^[!,.]$/.test(s)) return true          
        if(/^\w+[!,.]?$/.test(s)) return true      
        if(/^\w+[-]?\w+[!,.]?$/.test(s)) return true 
        return false
    })
    
    return filtered.length
};

