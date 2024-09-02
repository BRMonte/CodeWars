function findChildren(string) {
    let result = '';
    const moms = [...new Set(string.match(/[A-Z]/g))].sort();
    moms.forEach(m => {
        result += m + (m.toLowerCase().repeat((string.match(new RegExp(m.toLowerCase(), 'g')) || []).length));
    });
    return result;
}
