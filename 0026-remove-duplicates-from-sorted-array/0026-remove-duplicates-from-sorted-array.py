class Solution(object):
    def removeDuplicates(self, nums):
        unique=[]
        for num in nums:
            if num not in unique:
                unique.append(num)
        count=len(unique)
        for i in range(count):
            nums[i]=unique[i]
        return count     