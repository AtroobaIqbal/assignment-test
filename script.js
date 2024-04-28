// Name : Atrooba Iqbal
// Roll no : 141085


// Question # 01: Given an integer array nums, find a subarray that has the largest
// product, and return the product.

function maxProduct(nums) {
    if (!nums.length) return 0;

    let maxProd = nums[0];
    let minProd = nums[0];
    let result = maxProd;

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];
        if (num < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        maxProd = Math.max(num, maxProd * num);
        minProd = Math.min(num, minProd * num);

        result = Math.max(result, maxProd);
    }

    return result;
}

const myNums = [2, 3, -3, 4];
console.log(maxProduct(myNums));


// Question # 02: Given an array of integers nums and an integer target, return indices of
// the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.

var nums = [2, 7, 11, 15];

function twoSum(nums, target) {
    const numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }
        
        numIndices.set(nums[i], i);
    }
    
    return [];
}

var nums = [2, 7, 11, 15];
var target = 9;
console.log(twoSum(nums, target));

// Question # 03: Reverse each word in a given input string.

let statement = 'Welcome to this Javascript Guide!';
let reversed = statement.split(" ").map(word => word.split('').reverse().join('')).join(" ");
// let newstat = reversed.reverse();
// let joined = newstat.join()

console.log(reversed)


// Question # 04: Write a JavaScript program to display the reading status (i.e. display
// book name, author name and reading status) of the following books.

var library = [{
    author : 'Bill Gates',
    title : 'The Road Ahead',
    readingStatus : true
},
{
    author : 'Steve Jobs',
    title : 'Walter Isaacson',
    readingStatus : true
},
{
    author : 'Suzanne Collins',
    title : 'Mockingjay: The Fianl Book Of The Hunger Games',
    readingStatus : false
}];

function readingStatuss (lib) {
    for (var i=0 ; i < library.length; i++){
        var book = library[i];
        var status = book.readingStatus ? "prhi hui h" : "nhi prhi";
        // document.write("Book: " + book.title + ", Author: " + book.author + ", Status: " + status)
        console.log("Book: " + book.title + ", Author: " + book.author + ", Status: " + status);
    }
}
readingStatuss(library);


// Question # 05:
// Write a JavaScript function to convert an amount into coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
// You can return the answer in any order

function total(amount, coins) {
    coins.sort((a, b) => b - a);
  
    let result = [];
    let remaining = amount;
  
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
  
      while (remaining >= coin) {
        result.push(coin);
        remaining -= coin;
      }
  
      if (remaining === 0) {
        break; 
      }
    }
  
    return result;
  }
  
  const amount = 46;
  const coins = [25, 10, 5, 2, 1];
  const coinsUsed = total(amount, coins);
  console.log(coinsUsed);

