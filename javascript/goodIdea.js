function well(x) {
    let goodIdeasCount = 0;

    x.forEach(array => {
        array.forEach(idea => {
            if (typeof idea === 'string' && idea.toLowerCase() === 'good') {
                goodIdeasCount++;
            }
        });
    });

    if (goodIdeasCount === 0) return 'Fail!';
    if ([1, 2].includes(goodIdeasCount)) return 'Publish!';

    return 'I smell a series!';
}