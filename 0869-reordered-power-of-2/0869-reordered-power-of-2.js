var reorderedPowerOf2 = function(n) {
    let str = n.toString();
   let initialString =  str.split('').sort().join('');
    
    
    for(let i=0; i<30; i++){
        let tempString = (1<<i).toString();
       let finalString = tempString.split('').sort().join('');
        if(initialString===finalString){
            return true
        }
    }
    return false
}