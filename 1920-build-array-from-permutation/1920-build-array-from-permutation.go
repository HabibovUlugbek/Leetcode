func buildArray(nums []int) []int {
    result := make([]int, len(nums))
    
    for i, v := range nums {
		result[i] = nums[v]
	}

    return result
}