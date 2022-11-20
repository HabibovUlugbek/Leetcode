/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let left = 0;
    let right = height.length-1;
    while(left>= 0 && right< height.length && left<right) {
        if(height[left]<height[right]){
            max = Math.max(max , (right-left)*Math.min(height[left],height[right]))
            left++;
        } else {
            max = Math.max(max , (right-left)*Math.min(height[left],height[right]))
            right--;
        }
    }   
    return max;
};