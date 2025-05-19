function findSubsets(nums, target, index, current, result) {
  if (target === 0) {
    result.push([...current]);
    return;
  }

  if (index === nums.length || target < 0) {
    return;
  }

  current.push(nums[index]);

  findSubsets(nums, target - nums[index], index + 1, current, result);

  current.pop();

  findSubsets(nums, target, index + 1, current, result);
}

function findSubsetsWithSum(nums, target) {
  const result = [];
  const current = [];
  findSubsets(nums, target, 0, current, result);
  return result;
}

const nums = [2, 4, 6, 10];
const target = 16;

const subsets = findSubsetsWithSum(nums, target);

console.log(`Subsets with sum ${target} are:`);
console.log(subsets);