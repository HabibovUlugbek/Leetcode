
var amountOfTime = function(root, start) {
  const adj = {}
  
  // 1. Build graph
  dfs(root,null)
    
  function dfs(root,parent) {
      if(!root) return null
      
      if(parent !== null) {
          if(!(parent in adj)) adj[parent] = []
          adj[parent].push(root.val)
          
          if(!(root.val in adj)) adj[root.val] = []
          adj[root.val].push(parent)
      }
      
      if(root.left) {
          dfs(root.left, root.val)
      }
      
      if(root.right) {
          dfs(root.right, root.val)
      }
  }
    
  // 2. Edge case, if adj list is empty return 0
  if(Object.keys(adj).length === 0) return 0
    
  const visited = new Set()
    
  // 3. Traverse from the graph and get max depth
  function dfs2(node) {
     if(visited.has(node)) return 0
     visited.add(node)
     const children = adj[node]
     
     if(!children) return 0
      
     let subResult = 0
     for(const child of children) {
        subResult = Math.max(dfs2(child)+1, subResult) 
     } 
     
      return subResult
  }  
    
    const res = dfs2(start)
    
    // 4. Subtract 1 as we started calculating depth from first level
    return res-1
};