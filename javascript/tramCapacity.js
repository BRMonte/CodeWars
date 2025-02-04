function tram(stops, descending, onboarding) {
  let currentPassengers = 0;
  let maxCapacity = 0;

  for (let i = 0; i < stops; i++) {
    currentPassengers -= descending[i];
    currentPassengers += onboarding[i];
    maxCapacity = Math.max(maxCapacity, currentPassengers);
  }

  return maxCapacity;
}
