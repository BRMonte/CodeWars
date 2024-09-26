const GAME_MAP = {
    scissors: ['paper', 'lizard'],
    paper: ['rock', 'spock'],
    rock: ['lizard', 'scissors'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
};

function rpsls(p1, p2) {
    if (GAME_MAP[p1].includes(p2)) {
        return 'Player 1 Won!';
    } else if (GAME_MAP[p2].includes(p1)) {
        return 'Player 2 Won!';
    }
    return 'Draw!';
}
