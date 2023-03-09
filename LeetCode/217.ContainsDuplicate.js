var containsDuplicate = function (nums) {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      return true;
    } else hash.set(nums[i], true);
  }
  return false;
};
