// Given nums, the functions finds and returns the sum of the minimum and maximum value of nums

function sumOfMinimumAndMaximum(nums) {

	var x = 0; // Defines x as a function and it's given the value 0
	var y = nums[0]; // Defines y as a function and it's given the value of nums' first number

	for (var i = 0; i < nums.length; i++){ // A loop running nums' length - 1 times
		if(nums[i] > x){ // Checks if nums' slot is greater than x
			x = nums[i]; // Sets x to the value of nums' slot
		}

		if(nums[i] < y){ // Checks if nums' slot is less than y 
			y = nums[i]; // Sets y to the value of nums' slot
		}
	}
	
	return x + y; // Returns the sum of the minimum and maximum values of nums

}

/* Output:
     the sumOfMinimumAndMaximum(nums) function
    √ should return a finite value
    √ should return a value that indicates the sum of the lowest and highest value in the input array
    √ should pass auxillary test cases
    √ should not conduct mutative operations on the input array


  4 passing (63ms)
*/

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
