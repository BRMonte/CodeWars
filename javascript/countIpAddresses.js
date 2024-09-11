function ipAddressToInteger(ipAddress) {
    const numbers = ipAddress.split('.').map(Number);
    return numbers[0] * (256 ** 3) + numbers[1] * (256 ** 2) + numbers[2] * (256 ** 1) + numbers[3] * (256 ** 0);
}

function ipsBetween(start, ending) {
    return ipAddressToInteger(ending) - ipAddressToInteger(start);
}