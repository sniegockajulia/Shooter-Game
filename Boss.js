// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game);  // Call the Opponent constructor
        this.speed *= 2;  // Boss moves twice as fast
        this.image.src = 'path/to/boss.png';  // Use the boss image
    }

    collide() {
        super.collide();  // Call the parent's collide method
        document.getElementById('game-over-image').src = 'path/to/boss_dead.png';
    }
}
