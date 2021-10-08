var interpret = function(command) {
    var str = command.split('()').join('o');
    
    return str.split('(al)').join('al')
};

console.log(interpret("G()(al)"))