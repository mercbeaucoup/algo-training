/* ITERATIVE SOLUTION
if the num is less than or equal to 9, return 0;
if the num is less than or equal to 24, return 1;

Create a counter
Declare a current number, set it to num

Declare a while loop that executes as long as the number is greater than 9
Increment counter by 1 
If the number is less than or equal to 24, return counter;


Otherwise, coerce number into string and split; save array to a variable
Declare a current total and set it to the first value in the array, coerced into a number
Iterate over the array, starting at idx 1 and multiply the current total by the element at that index (coerced into a Number)

When the for loop is complete, Set the current number to the current total

When the while loop is complete, return counter
*/

// const multiPers = (num) => {
//   if (num <= 9) return 0;
//   if (num <= 24) return 1;

//   let counter = 0;
//   let currNum = num;

//   while (currNum > 9) {
//     counter++;
//     if (currNum <= 24) {
//       return counter;
//     }
//     let arrayOfNums = String(currNum).split("");
//     let currTotal = Number(arrayOfNums[0]);
//     for (let i = 1; i < arrayOfNums.length; i++) {
//       currTotal *= Number(arrayOfNums[i]);
//     }
//     currNum = currTotal;
//   }
//   return counter;
// };

const multiPers = (num) => {
  if (num <= 9) return 0;

  let counter = 0;
  let currNum = num;

  while (currNum > 9) {
    counter++;
    currNum = String(currNum) --> '246'
      .split("") --> ['2', '4', '6']
      .reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
  return counter;
};

console.log(multiPers(24)); //1
console.log(multiPers(901982319238192938)); //1
console.log(multiPers(9111111111111111111111111111111111111)); //1
console.log(multiPers(456)); //2
console.log(multiPers(39)); //3
console.log(multiPers(7878)); //4
console.log(multiPers(277777788888899)); //11

/* 
RECURSIVE SOLUTION

Base case: If num is less than or equal to 9, return 0;

Else: 
For loop, same as iterative solution;

Return 1 + multiPersRec(newNum)
*/

const multiPersRec = (num) => {
  if (num <= 9) {
    return 0;
  } else if (num <= 24) {
    return 1;
  } else {
    let arrayOfNums = String(num).split("");
    let currTotal = Number(arrayOfNums[0]);
    for (let i = 1; i < arrayOfNums.length; i++) {
      currTotal *= Number(arrayOfNums[i]);
    }
    return 1 + multiPersRec(currTotal);
  }
};

// console.log(multiPersRec(39)); //3
// console.log(multiPersRec(24)); //1
// console.log(multiPersRec(456)); //2
// console.log(multiPersRec(7878)); //4
