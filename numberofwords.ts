function mostWordsFound(sentences: string[]): number {
    let num:number = 0;
    for(let i:number=0;i<sentences.length;i++){
        let words:string[]= sentences[i].split(" ");
        if(num<words.length) num = words.length;
    }
    return num
};