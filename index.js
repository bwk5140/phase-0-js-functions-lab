/*
* Lab: Functions in Javascript
* Purpose: Testing function definition, implementation, and testing
* Owner: Brian W. Karimi
* Course: SDPT16
* Date: 30th September, 2026
* Time of last edit: 23:20 hrs
*/

//Calculates the tax value of
// an amount based on a 10% rate
function calculateTax(amount){
    return((10/100) * amount)
}

//Converts a string to uppercase
function convertToUpperCase(text){
    return(text.toUpperCase());
}

//Finds the max variable of two
// parameters
function findMaximum(num1, num2){
    return(Math.max(num1, num2));
}

//Returns true or false based
// on whether a given strin
// is a palindrome or not
function isPalindrome(word){
    let reverseWord = "";
    for (let i = (word.length - 1); i >= 0; i--){
        reverseWord += word[i];
    }
    if (reverseWord === word){
        return(true);
    }
    else{
        return(false);
    }
}

//Calculates the final price given an original price and a discount
// percentage
function calculateDiscountedPrice(originalPrice, discountPercentage){
    if (discountPercentage >= 1){
        //debugger;
        discountPercentage = discountPercentage / 100;
        return(originalPrice - (originalPrice * discountPercentage));
    }
    else if (discountPercentage === 0){
        return(originalPrice);
    }
    else{
        return(originalPrice - (originalPrice * discountPercentage));
    }
}

// Makes the functions declared above available for import outside of index.js 
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };