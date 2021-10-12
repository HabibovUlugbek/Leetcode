var stoneGameV = function(a) {
    const rowSum = getRowSumWithNums( a )
    const dp = Array.from({length:a.length+1},_=>Array(a.length+1).fill(0))
    const guess = ( left, right ) => {
        if ( left === right ) return 0
        if ( dp[ left ][ right ] ) return dp[ left ][ right ]

        for ( let i = left + 1; i <= right; i++ ) {
            const leftSum = rowSum( left, i - 1 )
            const rightSum = rowSum( i, right )

            if ( leftSum === rightSum ) {
                dp[ left ][ right ] = Math.max(
                    dp[ left ][ right ],
                    leftSum + guess( left, i - 1 ),
                    rightSum + guess( i, right )
                )
            } else if ( rightSum > leftSum ) {
                dp[ left ][ right ] = Math.max(
                    dp[ left ][ right ],
                    leftSum + guess( left, i - 1 )
                )
            } else {
                dp[ left ][ right ] = Math.max(
                    dp[ left ][ right ],
                    rightSum + guess( i, right )
                )
            }
        }
        
        return dp[ left ][ right ]
    }
     guess( 0, a.length-1 )
    
    return dp[ 0 ][ a.length-1 ]
}

const getRowSumWithNums = nums => {
    const sums = nums.reduce( ( s, x ) => [ ...s, x + ( s[s.length - 1 ] || 0 ) ], [] )

    return ( left, right ) => sums[ right ] - ( sums[ left - 1 ] || 0 )
}