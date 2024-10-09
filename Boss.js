// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game, width, height, x, y, speed, myImage, myImageDead);  // Call the Opponent constructor
        this.speed *= 2;  // Boss moves twice as fast
        this.myImage = 'assets/boss.png';
        this.myImageDead = 'assets/boss_dead.png';
    }
}
