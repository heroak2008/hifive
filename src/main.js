class PokerGame extends Phaser.Scene {
    constructor() {
        super({ key: 'PokerGame' });
    }

    preload() {
        // Load assets here
    }

    create() {
        // Initialize game objects here
    }

    update() {
        // Game logic here
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: PokerGame,
    parent: 'game-container'
};

const game = new Phaser.Game(config);
