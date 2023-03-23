var reverseOddLevels = function(root) {
    let queue = [root];
    let level = 0;
    
    while (queue.length) {
        const next = [];
        for (let i = 0; i < queue.length; i++) {
            const node = queue[i];
            if (node.left) {
                next.push(node.left);
            }
            if (node.right) {
                next.push(node.right);
            }
        }
        
        if (level % 2) {
            for (let i = 0, j = queue.length - 1; i < j; i++, j--) {
                const temp = queue[i].val;
                queue[i].val = queue[j].val;
                queue[j].val = temp;
            }
        }
        
        queue = next;
        level++;
    }
    
    return root;}