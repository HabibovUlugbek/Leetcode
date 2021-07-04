var isNumber = function(s) {
    if (s === "Infinity" || s === "-Infinity" || s === "+Infinity")   {
        return false
    } else return !isNaN((s))
};

console.log(isNumber("Infinity"))