function outed(meet, boss) {
    let count = Object.entries(meet).reduce((acc, [name, score]) => {
        return acc + (name === boss ? score * 2 : score);
    }, 0);

    return (count / Object.keys(meet).length) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!';
}