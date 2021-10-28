class Solution:
    def kthLargestNumber(self, nums: List[str], k: int) -> str:
        nums = list(map(int,nums))
        nums.sort()
        return str(nums[-k])