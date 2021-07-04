var squareIsWhite = function(coordinates) {
    coordinates.split("")
    if(coordinates[0] === "a" || coordinates[0] === "c" || coordinates[0] === "e" || coordinates[0] === "g" ) {
        if(coordinates[1] === "1" || coordinates[1] === "3" || coordinates[1] === "5" || coordinates[1] === "7") {
            return false
        }else return true
    } else if(coordinates[0] === "b" || coordinates[0] === "d" || coordinates[0] === "f" || coordinates[0] === "f" ) {
        if(coordinates[1] === "1" || coordinates[1] === "3" || coordinates[1] === "5" || coordinates[1] === "7") {
            return true
        }else return false
    }
};
console.log(squareIsWhite("a1"))