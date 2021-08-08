function pairSum(array, k) {
  let memo = {};
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    let diff = k - curr;
    if (memo[diff]) {
      return true;
    } else {
      memo[curr] = true;
    }
  }
  return false;
}

console.log(pairSum([10, 15, 3, 7], 17)); //true
console.log(pairSum([10, 15, 3, 7], 18)); //true
console.log(pairSum([10, 15, 3, 7], 19)); //false
console.log(pairSum([10], 10)); //false
console.log(pairSum([], 10)); //false

//Big O
//Time Complexity: O(n)
//Space Complexity: O(n)
