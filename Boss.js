// Boss.js
class Boss extends Opponent {
    constructor(game) {
        const speed = OPPONENT_SPEED * 2,
            myImage = 'assets/boss.png',
            myImageDead = 'assets/boss_dead.png';
        super(game, width, height, x, y, speed, myImage, myImageDead);  // Call the Opponent constructor
    }
}
