export function hammingDistance(a: string, b: string): number {
    return Array.from(a).reduce((count, letter, index) => count + (b[index] !== letter ? 1 : 0), 0);
  }