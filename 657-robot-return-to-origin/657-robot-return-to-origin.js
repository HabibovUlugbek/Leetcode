/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let map = {};
    moves = moves.split("");
    for(let i=0 ;i<moves.length; i++){
        if(map[moves[i]]){
map[moves[i]] ++
        } else map[moves[i]] =1
    }
    
    if(map["U"] === map["D"] && map["L"] === map["R"]) return true;
    return false;
};