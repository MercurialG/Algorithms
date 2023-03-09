var twoSum = function (nums, target) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (hash.has(diff)) {
      return [nums.indexOf(diff), i];
    } else hash.set(nums[i], true);
  }
  return [];
};
