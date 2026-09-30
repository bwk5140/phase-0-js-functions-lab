function calculateTax(amount){
    console.log((10/100) * 100)
}

function convertToUpperCase(text){
    console.log(text.toUpperCase());
}

function findMaximum(num1, num2){
    console.log(Math.max(num1, num2));
}

function isPalindrome(word){
    let reverseWord = "";
    for (let i = (word.length - 1); i >= 0; i--){
        reverseWord += word[i];
    }
    if (reverseWord === word){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

function calculateDiscountedPrice(originalPrice, discountPercentage){
    if (discountPercentage >= 1){
        discountPercentage = discountPercentage / 100;
    }
    console.log(originalPrice - (originalPrice * discountPercentage));
}

calculateTax(1560);

convertToUpperCase("hi, have a great afternoon");

findMaximum(10, 18);

isPalindrome("word", "drow");

isPalindrome("civic", "civic");

calculateDiscountedPrice(1200, 12);
calculateDiscountedPrice(1200, 0.06);