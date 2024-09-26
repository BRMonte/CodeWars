export function nextHappyYear(year: number): number {
    year += 1;
    while (new Set(year.toString()).size !== 4) {
      year += 1;
    }
    return year;
  }