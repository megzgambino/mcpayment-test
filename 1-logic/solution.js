const nums = [2,7,11,15]
const target = 13

function solution (nums, target) {
    let answer
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return answer = [i, j]
            }
        }
    }
   return answer = null
}


console.log(solution(nums, target))