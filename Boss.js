
// Boss.js
class Boss extends Opponent {
    constructor(game) {
        this.speed *= 2;
        this.myImage = 'assets/boss.png',
        this.myImageDead = 'assets/boss_dead.png';
       
        // Call the parent class constructor with the boss's properties
        super(game, width, height, x, y, speed, myImage, myImageDead);
    }

    // The shoot and collide methods can be inherited directly from the Opponent class.
}
