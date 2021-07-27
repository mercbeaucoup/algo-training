PROMPT:

Given a non-negative integer, write a function that returns its multiplicative persistence--the number of times you must multiply the digits in a number together until you reach a single digit product.

EXAMPLES:

456 returns 2
1: 4 x 5 x 6 = 120
2: 1 x 2 x 0 = 2

6789 returns 2
1: 6 x 7 x 8 x 9 = 3024
2: 3 x 0 x 2 x 4 = 0

7878 returns 4
1: 7 x 8 x 7 x 8 = 3136
2: 3 x 1 x 3 x 6 = 54
3: 5 x 4 = 20
4: 2 x 0 = 0

39 returns 3

1: 3 x 9 = 27
2: 2 x 7 = 14
3: 1 x 4 = 4

45 returns 2

1: 4 x 5 = 20
2: 2 x 0 = 0

15 returns 1

1: 1 x 5 = 5

Space Complexity: Unknown - no predictable relationship between the size of the input and how many recursive calls that need to be made (though space complexity is O(1) in iterative solution)
Time Complexity: Unknown - no predictable relationship between the size of the input and how long it takes to solve
