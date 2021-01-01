// Given nums, count the amount of numbers that are smaller than the target value

function countOfAllNumbersSmallerThanTarget(nums, target) {
	
	var x = 0; // Defines x as a function and gives it the value 0

	for (var i = 0; i < nums.length; i++){ // A loop running nums' length - 1 times
		if(nums[i] < target){ // Checking if the nums slot is less than the target
			x += 1; // Adds 1 to x
		}
	}

	return x; // Returns the amount of numbers in nums that are less than the target value
}

/* Output:
     the countOfAllNumbersSmallerThanTarget(nums) function
    √ should return a finite value
    √ should return a value that indicates the total amount of values less than the target
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (36ms)
*/

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
