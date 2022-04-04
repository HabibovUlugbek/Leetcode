function nextGreatestLetter(letters: string[], target: string): string {
    let char:string = '';
    let pos = 257;
    for(let i:number = 0 ; i<letters.length; i++){
        if(target.charCodeAt(0)<letters[i].charCodeAt(0) &&  pos>letters[i].charCodeAt(0)) {
            char = letters[i];
            pos = letters[i].charCodeAt(0);
        }
    }
    if(!char){
        char = letters[0];
        pos = letters[0].charCodeAt(0) ;
        for(let i:number = 0 ; i<letters.length; i++){
        if(pos>letters[i].charCodeAt(0)) {
            char = letters[i];
            pos = letters[i].charCodeAt(0);
        }
    }
    }
    return char;
    
};