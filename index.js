/*
* Lab: Functions in Javascript
* Purpose: Testing function definition, implementation, and testing
* Owner: Brian W. Karimi
* Course: SDPT16
* Date: 30th September, 2026
* Time of last edit: 17:13 hrs
*/

function calculateTax(amount){
    return((10/100) * amount)
}

function convertToUpperCase(text){
    return(text.toUpperCase());
}

function findMaximum(num1, num2){
    return(Math.max(num1, num2));
}

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

console.log(calculateDiscountedPrice(1200, 9));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };