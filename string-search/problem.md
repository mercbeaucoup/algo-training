You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

EXAMPLES
indexOf('or', 'hello world'); // should return 7
indexOf('hello world', 'or'); // should return -1
indexOf('howdy', 'hello world'); // should return -1
indexOf('oox', 'ooboxoooxo'); // should return 6

APPROACH
Without using built-in JS array methods, iterate over the array using a nested for-loop.

BIG O

In the worst-case scenario, we will iterate over the array n\*m times.
