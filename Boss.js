// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game);  // Call the Opponent constructor
        this.speed *= 2;  // Boss moves twice as fast
        this.myImage = 'assets/boss.png';  // Use the boss image
    }

    collide() {
        super.collide();  // Call the parent's collide method
        document.getElementById('game-over-image').src = 'assets/boss_dead.png';
    }
}
