/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var visited = new Set();
    let max = 0;
    function traverse(room,visited){
        if(visited.has(room)) return null;
        let curr = rooms[room]
        visited.add(room)
        for(let neighboor of curr){
            traverse(neighboor, visited)
        }        
    }    
    
    traverse(0, visited);
    for(let i=0;i<rooms.length; i++){
        max= Math.max(...rooms[i],max)
    } 
    return visited.size === max+1
};