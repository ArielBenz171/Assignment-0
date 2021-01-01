// Given nums, the function checks if the numbers in nums fit within the range of start and end.

function sumOfNumsWithinARange(nums, start, end) {
	
	var x = 0; // Defines x as a function and gives it the value 0

	for (var i = 0; i < nums.length; i++){ // A loop running nums' length - 1 times
		// Checks if nums' slot is between start and end
		if(nums[i] >= start && nums[i] <= end){
			x += 1; // Adds 1 to x
		}
	}

	return x; // Returns all of the numbers in nums that are within the range of start and end
}

/* Output:
     the sumOfNumsWithinARange(nums, start, end) function
    √ should return a finite value
    √ should return a value that indicates the total amount of numbers that fall between start and end, inclusive
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (42ms)
*/

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
