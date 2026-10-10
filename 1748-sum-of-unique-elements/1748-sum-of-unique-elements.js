/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let a=0;
    for(num of nums){
        if(nums.indexOf(num)===nums.lastIndexOf(num)){
            a+=num
        }
    }
    return a
};