//declare a function that accepts a string
const balancedBrackets = (string) => {
  //declare a dictionary
  //define each closing bracket as the key, and the opening bracket as the value
  let dictionary = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  //declare a stack (array)
  let stack = [];
  //loop through the string
  for (let i = 0; i < string.length; i++) {
    //grab the current character
    let curr = string[i];
    //if the current character is an opening bracket, add it to the stack
    if (curr === "{" || curr === "[" || curr == "(") {
      stack.push(curr);
    }
    if (dictionary[curr]) {
      //check to see if the last element in the stack is the opening bracket (as defined by the dictionary)
      if (dictionary[curr] === stack[stack.length - 1]) {
        //if it is, pop the last element off the stack
        stack.pop();
      } else {
        //if its not, return false
        return false;
      }
    }
  }
  //if you've gone all the way through the string, and the stack is empty, return true
  //else return false;
  return stack.length === 0;
};

console.log(balancedBrackets("[]"));
console.log(balancedBrackets("["));
console.log(balancedBrackets("[sdlfjsdlfj[lsdkjf]]"));
console.log(balancedBrackets("(){}{({(})})"));
