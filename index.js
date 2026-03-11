// /* BREAKING CHOCOLATE SOLUTION*/

// function breakChocolate(n, m) {
//   const product = n * m;
//   return product > 0 ? product - 1 : 0;
// }

// OR


// function breakChocolate(n, m) {
//   const product = n * m;
//   if (product > 0) {
//     return product - 1;
// } else {
//     return 0;
// }
// }


/* REVERSE A NUMBER

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


   
  





