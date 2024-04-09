// In this Kata, we will calculate the minimum positive number that is not a possible
// sum from a list of positive integers.

'https://www.codewars.com/kata/5a941f3a4a6b34edf900006f/train/ruby'

function solve(arr) {
    arr.sort((a, b) => a - b);
    let result = 1;

    for (let num of arr) {
        if (num > result) {
            break;
        } else {
            result += num;
        }
    }

    return result;
}
