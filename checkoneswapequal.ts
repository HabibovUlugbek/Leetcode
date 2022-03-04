function areAlmostEqual(str1: string, str2: string): boolean {
    let s1 :string[] = str1.split("")
    let s2 :string[] =  str2.split("");
    if(s1.length !== s2.length) return false;
    let first :number  = 0;
    let last:number =0;
    let k :number  = 0;
    for(let i:number =0 ;i<s1.length; i++){
        if(s1[i] !== s2[i]) {
            k++;
            first = last ;
            last=i;
        }
        if(k ===2) break;
    }
    let change :string = s2[first];
    s2[first.toString()] = s2[last];
    s2[last.toString()]=change;
    if(s2.join("") === s1.join("")) return true;
    return false;
};