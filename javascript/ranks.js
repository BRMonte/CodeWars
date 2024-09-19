function ranks(scores) {
    const ranks = scores
        .map((score, index) => [score, index])
        .sort((a, b) => b[0] - a[0]);
    
    const rankMap = {};
    
    ranks.forEach(([score], rank) => {
        if (!(score in rankMap)) {
            rankMap[score] = rank + 1;
        }
    });

    return scores.map(score => rankMap[score]);
}
