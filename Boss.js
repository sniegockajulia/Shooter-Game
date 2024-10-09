// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game)
        this.speed = 10;
        this.image.src = 'assets/boss.png';
        this.myImageDead = 'assets/boss_dead.png';
    }
}
