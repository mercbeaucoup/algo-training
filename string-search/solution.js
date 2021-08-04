const indexOf = (needle, haystack) => {
  for (let i = 0; i < haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) break;
      if (j + 1 === needle.length) return i;
    }
  }
  return -1;
};

console.log(indexOf("or", "hello world")); //7
console.log(indexOf("hello world", "or")); //-1
console.log(indexOf("howdy", "hello world")); //-1
console.log(indexOf("oox", "ooboxoooxo")); //6
