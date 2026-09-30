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

export {calculateTax};
export {convertToUpperCase};
export {findMaximum};
export {isPalindrome};
export {calculateDiscountedPrice};