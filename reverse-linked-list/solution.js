const mkNode = (value, next = null) => ({ value, next });
const nums = mkNode(1, mkNode(2, mkNode(3)));

// List
// {value: 1, next: 2} --> {value: 2, next: 3} --> {value: 3, next: null}
// Want it to return 3 2 1

function printReverse(node) {
  if (!node) {
    return;
  } else {
    printReverse(node.next);
    console.log(node.value);
  }
}

printReverse(nums);

function reverse(oldList, newList = null) {
  if (!oldList) {
    return newList;
  } else {
    const newerList = mkNode(oldList.value, newList);
    return reverse(oldList.next, newerList);
  }
}
