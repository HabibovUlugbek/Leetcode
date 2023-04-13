/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    let stack = [pushed.shift()]
    while(stack.length > 0 || pushed.length >0) {
        if(stack.includes(popped[0])){
            let pop = stack.pop()
            let poppedEl = popped.shift()
            if(pop !== poppedEl) return false
            continue
        }
        let push = pushed.shift()
        stack.push(push)
    }
    return true;
};