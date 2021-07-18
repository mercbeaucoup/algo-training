//Iterative solution
const palindrome = (str) => {
    let pointer1 = 0;
    let pointer2 = str.length-1;

    while (pointer1<= pointer2) {
        let left = str[pointer1].toLowerCase();
        let right = str[pointer2].toLowerCase();
        if (left !== right) return false;
        pointer1++
        pointer2--
    }
    return true;
}

const pal2 = (str) => {
    while (str.length > 1) {
        if (str[0].toLowerCase() !== str[str.length-1].toLowerCase()) return false;
        str = str.slice(1, str.length-1);
    }
    return true
}

// console.log(palindrome('anna'))
// console.log(palindrome('Anna'))
// console.log(palindrome('Meredith'))
// console.log(palindrome('race! !Ecar'))
// console.log(palindrome('race car'))

// console.log(pal2('anna'))
// console.log(pal2('Anna'))
// console.log(pal2('Meredith'))
// console.log(pal2('race! !Ecar'))
// console.log(pal2('race car'))

/* BIG O NOTATION
    - TIME:
        - O(n/2) ---> O(n)
    - SPACE:
        - O(1)
 */

//Recursive Solution

const recPal = (str) => {
    let string = str.toLowerCase();
    if (string.length <= 1) {
        return true
    } 
    if (string.length === 2) {
        return string[0] === string[1]
    }

    let left = string[0];
    let right = string[string.length-1];
    if (left !== right) {
        return false;
    }
    let slice = string.slice(1, string.length-1);
    console.log(slice);
    return recPal(slice)
}

// console.log(recPal('anna'))
// console.log(recPal('Anna'))
// console.log(recPal('Meredith'))
// console.log(recPal('race! !Ecar'))
// console.log(recPal('race car'))

/* BIG O NOTATION
    - TIME:
        - O(n/2) ---> O(n)
    - SPACE:
        - O(n/2) ---> O(n)
        Explanation: We create n/2 additional calls on the recursive call stack 
        each time we slice off the first/last characters and recurse.
 */