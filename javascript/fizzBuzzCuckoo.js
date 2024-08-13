function fizzBuzzCuckooClock(time) {
    const [hour, minute] = time.split(':').map(Number);
    const adjustedHour = hour % 12;
  
    if (minute === 30) {
      return 'Cuckoo';
    }
    if (minute === 0) {
      return 'Cuckoo '.repeat(adjustedHour === 0 ? 12 : adjustedHour).trim();
    }
  
    if (minute % 15 === 0) {
      return 'Fizz Buzz';
    } else if (minute % 5 === 0 && minute % 3 !== 0) {
      return 'Buzz';
    } else if (minute % 3 === 0) {
      return 'Fizz';
    } else {
      return 'tick';
    }
  }
