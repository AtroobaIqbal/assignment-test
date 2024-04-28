// 1. Write a function which checks if string is palindrom
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
// and
// removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// Example 1:
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:
// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:
// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

var palindrom = "A man, a plan, a canal: Panama";
function reversee (a) {
    let modify = palindrom.toLocaleLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(modify);
    let check = modify.split().reverse().join();
    console.log(check);
    

}
reversee();
function ispalindrome(palindrom){
    let reversed = "";
    for (let i = palindrom.length -1; i >= 0 ; i--) {
        reversed += palindrom[i];
    
    }
    if (reversed == palindrom){
        return true
    } else{
        return false
    }
}
console.log(ispalindrome(palindrom));