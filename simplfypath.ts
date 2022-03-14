function simplifyPath(way: string): string {
    let stack = [];
    let path:string[] = way.split('/');
    
    for (let i=0;i<path.length;i++) {
        if (path[i]=='.' || path[i]=='') continue;
        if (path[i]=='..') stack.pop();
        else stack.push(path[i]);
    }
    
    return '/'+stack.join('/');
};