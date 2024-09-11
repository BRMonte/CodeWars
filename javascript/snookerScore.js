function frame(score) {
    let firstPlayerWins = 0;
    let secondPlayerWins = 0;
  
    score.split('; ').forEach(play => {
      let parts = play.split('-');
      let scores = parts.map(part => part.replace(/\(.*?\)/g, '').trim());
      let [firstScore, secondScore] = scores.map(Number);
  
      if (firstScore > secondScore) {
        firstPlayerWins++;
      } else if (secondScore > firstScore) {
        secondPlayerWins++;
      }
    });
  
    return [firstPlayerWins, secondPlayerWins];
  }
  