// Boss.js
class Boss extends Opponent {
    constructor(game) {
        super(game)
        this.speed = OPPONENT_SPEED * 5;
        this.image.src = 'assets/boss.png';
        this.myImageDead = 'assets/boss_dead.png';
    }
}
