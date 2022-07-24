var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let curSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        let num = nums[i];
        curSum += num;
        if(maxSum < curSum) {
            maxSum = curSum;
        }
        if(curSum < num) {
            curSum = num;
        }
        if(num > maxSum) {
            maxSum = num;
            curSum = num;
        }
    }
    return maxSum;
};

arr1 = [1, 2, 3, 4, -10];
arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

print(maxSubArray(arr1));
print(maxSubArray(arr2));
