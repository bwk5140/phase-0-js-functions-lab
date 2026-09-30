import * as name from "../functions.js";

const val = 20;

console.log(name.calculateTax(0));
console.log(name.calculateTax(1000000000));
console.log(name.calculateTax(-120));

console.log(name.convertToUpperCase("Hi, Have A Good Day"));
console.log(name.convertToUpperCase("hi, have a good day"));
console.log(name.convertToUpperCase("HI, HAVE A GOOD DAY"));
console.log(name.convertToUpperCase(`Hi, i have 30% of $${val} which equates to $${name.calculateDiscountedPrice(20, 30)}`));
console.log(name.convertToUpperCase(""));

console.log(name.findMaximum(9, 12));
console.log(name.findMaximum(9, -12));
console.log(name.findMaximum(-9, -12));
console.log(name.findMaximum(9, 9));

console.log(name.isPalindrome("civic", "civic"));
console.log(name.isPalindrome("word", "drow"));
console.log(name.isPalindrome("c", "c"));
console.log(name.isPalindrome("", ""));

console.log(name.calculateDiscountedPrice(1200, 6));
console.log(name.calculateDiscountedPrice(1200, 0.06));
console.log(name.calculateDiscountedPrice(1200, 600));
console.log(name.calculateDiscountedPrice(1200, 100));
console.log(name.calculateDiscountedPrice(1200, 0));