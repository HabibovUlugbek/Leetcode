var countMatches = function(items, ruleKey, ruleValue) {
    var arr = 0
    items.forEach(el => {
        if(ruleKey === "type"){
            if(el[0] === ruleValue) arr++
        } else if(ruleKey === "color"){
            if(el[1] === ruleValue) arr++
        }else if(ruleKey === "name"){
            if(el[2] === ruleValue) arr++
        } else continue;
    });

    return arr;
};