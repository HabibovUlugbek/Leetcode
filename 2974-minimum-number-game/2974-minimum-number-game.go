func numberGame(nums []int) []int {
    result := make([]int, 0, len(nums))
    sort.Ints(nums)

    for i := 0; i < len(nums); i += 2 {
        result = append(result, nums[i + 1], nums[i])
    }

    return result
}