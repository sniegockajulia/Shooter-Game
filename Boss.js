// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game);  // Call the Opponent constructor
        this.speed *= 2;  // Boss moves twice as fast
        this.image.src = 'assets/boss.png';  // Use the boss image
    }
}
