function greatestProduct(n) {
    let maxProduct = 0;

    for (let i = 0; i <= n.length - 5; i++) {
        const chunk = n.slice(i, i + 5);
        const product = chunk.split('').reduce((prod, char) => prod * parseInt(char), 1);
        if (product > maxProduct) {
            maxProduct = product;
        }
    }

    return maxProduct;
}