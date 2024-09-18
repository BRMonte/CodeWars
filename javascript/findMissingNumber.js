function findNumber(start, stop, string) {
    let rangeStr = Array.from({ length: stop - start + 1 }, (_, i) => (start + i).toString())
        .join('')
        .split('')
        .sort()
        .join('');

    for (let c of string) {
        rangeStr = rangeStr.replace(c, '');
    }

    console.log(rangeStr);
    
    const result = [];
    for (let n = start; n <= stop; n++) {
        if (Array.from(String(n)).sort().join('') === rangeStr) {
            result.push(n);
        }
    }
    return result;
}
