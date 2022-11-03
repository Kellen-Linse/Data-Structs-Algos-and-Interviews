const find_first_k_missing_positive = function(nums, k) {
  missingNumbers = [];
  let i = 0;

  while(i < nums.length){
    let j = nums[i]-1;

    if(nums[i] < 1 || nums[i] === nums[j]){
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  let missNumCount = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== i+1 && missNumCount < k){
      missingNumbers.push(i+1);
      missNumCount++;
    } 
  }

  for(let i = 0; i < k - missNumCount; i++){
    missingNumbers.push(nums.length + i + 1);
  }
  return missingNumbers;
};

console.log(find_first_k_missing_positive([2, 1, 3, 6, 5], 2))