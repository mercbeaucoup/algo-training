//USING THE DIVISION OPERATOR
//declare a function
function productNumsDiv(array) {
  //declare a product variable, initialize it at 1
  let totalProduct = 1;
  //loop over the numbers in the array
  for (let i = 0; i < array.length; i++) {
    //multiply product by array[i]
    totalProduct *= array[i];
  }
  //loop over the array again using map or a for loop
  //divide the product by array[i]
  //replace array[i] with the result
  //return the array
  return array.map((elem) => totalProduct / elem);
}

console.log(productNumsDiv([1, 2, 3, 4, 5])); //[ 120, 60, 40, 30, 24 ]

//WITHOUT USING THE DIVISION OPERATOR
function productExceptSelf(nums) {
  let products = [1];
  let currPre = 1;
  for (let i = 1; i < nums.length; i++) {
    let next = nums[i - 1] * currPre;
    products.push(next);
    currPre = next;
  }

  let currPost = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    let next = nums[i + 1] * currPost;
    products[i] = next * products[i];
    currPost = next;
  }

  return products;
}

console.log(productExceptSelf([1, 2, 3, 4, 5])); //[ 120, 60, 40, 30, 24 ]
