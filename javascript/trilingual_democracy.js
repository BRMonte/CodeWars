function trilingualDemocracy(group) {
    const officialLanguages = ['D', 'F', 'I', 'K'];
    const array = group.split('');

    if (new Set(array).size === 1) {
        return array[0];
    } else if (new Set(array).size === 2) {
        return array.find(c => array.filter(x => x === c).length === 1);
    } else {
        return officialLanguages.find(l => !array.includes(l));
    }
}
