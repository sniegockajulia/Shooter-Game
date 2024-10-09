// Boss.js
class Boss extends Opponent {
    constructor(game) {
        this.speed *= 2;  // Boss moves twice as fast
        this.myImage = 'assets/boss.png';  // Use the boss image
        super(game, width, height, x, y, speed, myImage, myImageDead);  // Call the Opponent constructor
    }

    collide() {
        super.collide();  // Call the parent's collide method
        document.getElementById('game-over-image').src = 'assets/boss_dead.png';
    }
}
