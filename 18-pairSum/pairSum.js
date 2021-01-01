// Given an array of nums and a target value, return true if two distinct nums sum up to the target

function pairSum(nums, target) {
	
	var boo = false; // Defines boo as a function and gives it the value false
	
	if(nums.length <= 1) // Checking if the amount of numbers have one or less values
		throw Error; // Throws an error if true
	

	for (var i = 0; i < nums.length; i++){ // A loop running i times
		for(var j = 0; j < nums.length; j++){ // A loop running j times
			/* Checking if 2 values' sum are equal to the target nums
			   and if the values are distinct */    
			if(nums[i] + nums[j] === target && i !== j){ 
				boo = true; // Sets boo to true if true
			}
		}
	}

	return boo; // Returns the value of boo

}

/* Output:
     the pairSum(nums, target) function
    √ should throw an error if the length of `nums` array is 1 or lower
    √ should not throw an error if the length of `nums` array is 2 or greater
    √ should return a boolean value
    √ should not mutate the input array `nums`
    √ should return `false` if no two distinct numbers sum up to `target` value
    √ should return `true` if two distinct numbers sum up to `target` value
    √ should pass auxillary test cases


  7 passing (42ms)
*/

// Do not edit this line;
module.exports = pairSum;
