// BREAKING CHOCOLATE SOLUTION

function breakChocolate(n, m) {
  const product = n * m;
  return product > 0 ? product - 1 : 0;
}

OR

function breakChocolate(n, m) {
  const product = n * m;
  if (product > 0) {
    return product - 1;
} else {
    return 0;
}
 }


// REVERSE A NUMBER

let num = 10;

    function reverseDigits(n) {
        let revNum = 0;
        while(n > 0)
        {
            revNum = revNum * 10 + n % 10;
            n = Math.floor(n / 10);
        }
        return revNum;
    }
     console.log(reverseDigits(num));

/*LEETCODE PALINDROME NUMBER */


var isPalindrome = function(x) {
        let revNum = 0;
        while(x > 0)
        {
            /*behind the scences)* revNum = the value of the calculation*/
            revNum = revNum * 10 + x % 10;
            x = Math.floor(x / 10); /*To get the value of X for the loop*/
        }
         if (revNum == x) {
        return true;
        }
        else{
          return false;
        }
   };

isPalindrome(121);


   
/*LEETCODE TWO SUM*/
/*TIME COMPLEXITY = LINEAR O(n) **/
/* SPACE COMPLEXITY = LINEAR O(n) **/
  
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 let map = new Map();

 for (i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;  

 if(map.has(num2)){
    return [i , map.get(num2)]
 }
 map.set(num1 , i )
 }  

};

   
/*LEETCODE CONTAINS DUPLICATE */
/*TIME COMPLEXITY = CONSTANT TIME  O(1) **/
/* SPACE COMPLEXITY = CONSTAnt TIME  O(1) **/

function containsDuplicates_1(nums) {
let NumSet= new Set(nums);
return (NumSet.size !== nums.length);
}

// ARRAY CONCEPTS;
-INDEXOF 
-LASTINDEXOF 

//TODO console.log(a) => [ 1, 2, 3, 1 ]
//TODO console.log(new Set(a)) => Set { 1, 2, 3 }
//TODO console.log((new Set(a)).size) => 3
//TODO  console.log(a.length) => 4

function containsDuplicates_1(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
      return true
    }
  }
  return false
}

/*LEETCODE CONTAINS DUPLICATE 2 */
/*TIME COMPLEXITY = LINEAR  TIME  O(1) **/
/* SPACE COMPLEXITY =  LINEAR TIME  O(1) **/

var containsNearbyDuplicate_2 = function(nums, k) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        
        // 1. Have we seen this number before?
        if (map.has(currentNum)) {
            const previousIndex = map.get(currentNum);
            
            // 2. Is the distance within the limit k?
            if (i - previousIndex <= k) {
                return true; 
            }
        }
        
        // Save (or overwrite) the number and its current index in the map
        map.set(currentNum, i);
    }
    return false;
};


//LEETCODE ROTATE ARRAY 

var rotate = function(nums, k) {
  k = k % nums.length;
    const tail = nums.splice(nums.length - k, k);
    Array.prototype.unshift.apply(nums, tail);
};

// IF K = k % nums.length it fails for this use case 
// nums = [-2147483648,0,2147483647]  k = 100000