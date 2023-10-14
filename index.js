function hasTargetSum(array, target) {
  // Write your algorithm here
// Create a Set to store found numbers
const foundNumbers = new Set();

// Iterate through the array
for (const number of array) {
  // Calculate the number needed to reach the target
  const numberNeeded = target - number;

  // If the number needed is found in the Set, return true
  if (foundNumbers.has(numberNeeded)) {
    return true;
  }

  // Add the current number to the Set
  foundNumbers.add(number);
}

// If no pair is found, return false
return false;
}




/* 
  Write the Big O time complexity of your function here
*/
// Time Complexity: O(n)
/* 
  Add your pseudocode here
  Function hasTargetSum(array, target)
  Create an empty Set called foundNumbers

  For each number in the array
    Calculate the numberNeeded as (target - number)

    If foundNumbers contains numberNeeded
      Return true

    Add number to foundNumbers

  Return false

*/

/*
  Add written explanation of your solution here
  
  Initialization: The function begins by initializing an empty Set called foundNumbers to keep track of numbers it has encountered.

Iterative Search: It iterates through the elements of the input array one by one. For each element:

It calculates numberNeeded as the difference between the target value and the current number, representing the value required to form a pair with the current number.
Pair Detection: The function checks if numberNeeded is present in the foundNumbers Set. If it is, this indicates a pair of numbers in the array that add up to the target value. In this case, the function returns true.

Tracking Seen Numbers: If numberNeeded is not found in the Set, the function adds the current number to foundNumbers, indicating that it has seen this number.

Result: If the entire array is traversed without finding a pair that sums to the target value, the function returns false. This algorithm efficiently scans the array once, maintaining a Set to track seen numbers, and has a time complexity of O(n).
  

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
