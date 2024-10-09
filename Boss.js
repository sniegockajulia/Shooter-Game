// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game)
        this.speed = this.speed*2;
        this.image.src = 'assets/boss.png';
        this.myImageDead = 'assets/boss_dead.png';
    }
}
