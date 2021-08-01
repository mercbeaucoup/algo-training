function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

const print = (node) => {
  console.log("Value:", node.value);
};

const breadthFirst = (node, callback) => {
  const queue = [node];

  while (queue.length > 0) {
    let currNode = queue.shift();
    queue.push(...currNode.children);
    callback(currNode);
  }
};

//breadthFirst(a, print);

const depthFirstPreOrder = (node, callback) => {
  if (!node) {
    return;
  } else {
    callback(node);
    node.children.forEach((child) => depthFirstPreOrder(child, callback));
  }
};

//depthFirstPreOrder(a, print);

const depthFirstPostOrder = (node, callback) => {
  if (!node) {
    return;
  } else {
    node.children.forEach((child) => depthFirstPostOrder(child, callback));
    callback(node);
  }
};

depthFirstPostOrder(a, print);
