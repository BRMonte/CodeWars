function reverse(number) {
    let reversed = 0;
    let isNegative = number < 0;
    
    if (isNegative) {
        number = -number;
    }
    
    while (number > 0) {
        let digit = number % 10;
        reversed = reversed * 10 + digit;
        number = Math.floor(number / 10);
    }
    
    return isNegative ? -reversed : reversed;
}