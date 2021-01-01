/* Given an arr of nums and a target value, check via binary search if nums has the target value
   within the array */

class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
	
	  /* Defines mid as a function and it's given the value of nums' length divided by 2 and
	     if it is a decimal, it is rounded down */
	  var mid = Math.floor((nums.length / 2));
  
	  /* Checking if nums' length is less than one and if the first value of nums is not
	     equal to the target value. */
	  if(nums.length <= 1 && nums[0] !== target){
	  	return false; // If the statement is true, the function will return false

	  }
	
	  /* If the previous function(s) are false, checks if nums' value at the mid point is
	     equal to the target */
	  else if(nums[mid] === target){
	  	return true; // If the statement is true, the function will return true
	  }

	  /* If the previous function(s) are false, checks if the target value is greater
	     than nums' value at the mid point */
	  else if(target > nums[mid]){
	     /* If the statement is true, the function will run again but with nums' starting
                from the midpoint value and ending at the end of the array */
		return this.binarySearch(nums.slice(mid), target);

	  }

	  else{ // If none of the previous functions(s) are true, this will run
		
		/* If the statement is true, the function will run again but with nums' starting
                   from the first value and ending at the midpoint value of the array */
  		return this.binarySearch(nums.slice(0, mid), target);
	 
	  }
  }
}

/* Output:
     the binarySearch(nums, target) function
    √ should be an inherited instance method
    √ should return a boolean value
    √ should return `false` if the `target` value does not exist in the `nums` input array
    √ should return `true` if the `target` value exists in the `nums` input array
    √ should pass auxillary test cases
    √ should be a recursive solution and approach logarithmic time complexity
    √ should not mutate the input array `nums`


  7 passing (54ms)
*/

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
