/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(domino) {
    let dominoes = domino.split("");
    let another = [...dominoes];
    for(let i=0 ; i< dominoes.length ; i++) {
        if(dominoes[i] === "."){
            // console.log(dominoes.join(""))
            // console.log(another.join(""))
            
            if(dominoes[i-1] === "R" && dominoes[i+1] === "L") continue;
            else if(dominoes[i-1] !== "R" && dominoes[i+1] === "L"){ 
                another[i] = "L";
            }
            else if(dominoes[i-1] === "R" && dominoes[i+1] !== "L") {
                another[i] = "R";
            }
        } else continue;
    }
    another = another.join("");
    if(another === domino) return another;
    return pushDominoes(another)
};