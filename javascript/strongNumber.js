function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function strong(n) {
    const sumOfFactorials = n
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, digit) => sum + factorial(digit), 0);

    return sumOfFactorials === n ? "STRONG!!!!" : "Not Strong !!";
}
