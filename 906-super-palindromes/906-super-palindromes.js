/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function(left, right) {
    let ans = 9 >= left && 9 <= right ? 1 : 0
    
    const isPal = str => {
        for (let i = 0, j = str.length - 1; i < j; i++, j--)
            if (str.charAt(i) !== str.charAt(j)) return false
        return true
    }
    
    for (let i = 1; i < 19684; i++) {
        let num = i.toString(3)
        if (isPal(num)) {
            let square = BigInt(num) * BigInt(num)
            if (square > right) return ans
            if (square >= left && isPal(square.toString())) ans++
        }
    }
    return ans
};