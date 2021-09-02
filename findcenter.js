var findCenter = function(edges) {
    
    for (let i = 0; i < edges.length; i++) {
           const el = edges[0][0]
            var bool = edges[i].includes(el)
        if(!bool)
          return edges[0][1]

    }
    return edges[0][0]
};