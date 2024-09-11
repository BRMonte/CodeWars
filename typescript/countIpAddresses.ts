function ipAddressToInteger(ipAddress: string): number {
    const numbers = ipAddress.split('.').map(Number);
    return numbers[0] * (256 ** 3) + numbers[1] * (256 ** 2) + numbers[2] * (256 ** 1) + numbers[3] * (256 ** 0);
}

export function ipsBetween(start: string, ending: string): number {
    return ipAddressToInteger(ending) - ipAddressToInteger(start);
}