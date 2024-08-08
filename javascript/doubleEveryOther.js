function doubleEveryOther(a) {
    return a.map((currElement, index) => {
      return index % 2 == 1 ? currElement * 2 : currElement
    });
  }