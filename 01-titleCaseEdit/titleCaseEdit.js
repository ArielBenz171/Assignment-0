// Given a variable title, the output will be the title but every word will be capitalized 

function titleCaseEdit(title) {
    title = title.split(" "); // This seperates each character of title

    for (var i = 0, x = title.length; i < x; i++) { // A loop running from 0 to the title's length - 1
        title[i] = title[i][0].toUpperCase() + title[i].substr(1); // Capitalizes first letter
    }

    return title.join(" "); // Combines the modified title together

}

/* Output:
      the titleCaseEdit(title) function
    √ should return a string
    √ should return a string of the same length as the input title
    √ should pass auxillary test cases


  3 passing (38ms)
*/

// Do not edit this line;
module.exports = titleCaseEdit;
