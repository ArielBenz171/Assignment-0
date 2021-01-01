/* Given args, the function will return with a set of all of the variables in args
   other than duplicates. */
 
function setUnionOfAnyAmountOfSets(...args) {
	
	var sets = new Set(); // Defines sets as a Set function

	args.forEach(dataPt => // Given args, for each data point
		dataPt.forEach(allDataPts => // Given data points, for all data points
			sets.add(allDataPts) // Adds all data points into sets without duplicates
		)
	)

	return sets; // Returns the set with all args variables other than the duplicates

}

/* Output:
     the setUnionOfAnyAmountOfSets(...args) function
    √ should return a set
    √ should be able to take in an indefinite amount of arguments
    √ should return the set union of the entire collection of sets
    √ should pass auxillary test cases


  4 passing (49ms)
*/

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
