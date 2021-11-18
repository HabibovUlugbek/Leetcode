/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
 var rand10 = function() {
    var row, col , num
    do {
        row= rand7();
        col= rand7();
        num = col+(row-1)*7
    }while(num>40);
    
    return 1+(num-1)%10
};