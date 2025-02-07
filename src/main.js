class PokerGame extends Phaser.Scene {
    constructor() {
        super({key: 'PokerGame'});
    }

    preload() {
        // Load assets here
        this.load.atlas('cards', 'assets/atlas/cards.png', 'assets/atlas/cards.json');
    }

    create() {
        this.initializeGame();
        let currentPlayer = this.defender;
        let currentHand = this.playerHands[0];
        let start_x = 100;
        let index = 0

        currentHand.forEach(card => {
            card['state'] = 'free';
        })

        this.bottomCards.forEach(card => {
            card['state'] = 'selected';
            currentHand.push(card);
        })

        currentHand = this.sortCards(currentHand, '5', 'hearts');
        currentHand.forEach(card => {
            let y_selected = 750 - 20;
            let y_free = 750;
            let y = y_free;
            if (card.state === 'selected') {
                y = y_selected
            }
            const cardSprite = this.add.sprite(start_x + index, y, 'cards', card.suit + card.value);
            cardSprite.setInteractive();
            cardSprite.on('pointerdown', function(pointer) {
                if (card.state === 'free') {
                    cardSprite.y = y_selected;
                    card.state = 'selected';
                } else {
                    cardSprite.y = y_free;
                    card.state = 'free';
                }
            });
            index += 25;
        })

    }

    update() {
        // Game logic here

    }

    initializeGame() {
        const players = this.assignPlayers();
        const defender = this.assignDefender(players);
        const deck = this.createDeck();
        const {playerHands, bottomCards} = this.dealCards(deck);
        this.players = players;
        this.defender = defender;
        this.deck = deck;
        this.playerHands = playerHands;
        this.bottomCards = bottomCards;
    }

    assignPlayers() {
        let playerNames;
        playerNames = ['A1', 'B1', 'A2', 'B2'];
        return playerNames;
    }

    createDeck() {
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const values = ['2', '3', '4', '5', '10', 'J', 'Q', 'K', 'A'];

        // 将所有卡牌放入一个数组，包括帧的信息
        let deck = [];
        for (let i = 0; i < 5; i++) {
            suits.forEach(suit => {
                values.forEach(value => {
                    if (value !== '6' && value !== '7' && value !== '8' && value !== '9') {
                        let cardValue = suit + value;
                        deck.push({suit, value});
                    }
                });
            });
            // Add Jokers
            deck.push({suit: 'Joker', value: 'Joker'});
            deck.push({suit: 'joker', value: 'joker'});
        }
        return Phaser.Utils.Array.Shuffle(deck);
    }

    sortCards(cards, turn, suit) {
        let cardOrder = {
            '2': 200,
            '3': 3,
            '4': 4,
            '5': 5,
            '10': 10,
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
            'joker': 999,
            'Joker': 1000
        };
        let suitOrder = {'hearts': 1, 'diamonds': 2, 'clubs': 3, 'spades': 4, 'Joker': 1000, 'joker': 999};
        let red = ['hearts', 'diamonds'];
        cardOrder[turn] *= 100;
        suitOrder[suit] += 10;
        if (suit in red) {
            suitOrder['hearts'] += 5;
            suitOrder['diamonds'] += 5;
        } else {
            suitOrder['clubs'] += 5;
            suitOrder['diamonds'] += 5;
        }

        cards.sort((a, b) => {
            let cardValueA = suitOrder[a.suit] * 20 + cardOrder[a.value];
            let cardValueB = suitOrder[b.suit] * 20 + cardOrder[b.value];
            return cardValueB - cardValueA;
        });

        return cards;
    }

    dealCards(deck) {
        const playerHands = [[], [], [], []];
        const bottomCards = deck.splice(0, 6);

        for (let i = 0; i < (46 * 4); i++) {
            playerHands[i % 4].push(deck.pop());
        }

        return {playerHands, bottomCards};
    }

    assignDefender(players) {
        const defenderIndex = Phaser.Math.Between(0, 3);
        const defender = players[defenderIndex];
        const defenderPartner = players[(defenderIndex + 2) % 4];
        const firstPlayer = defenderPartner;

        return {defender, defenderPartner, firstPlayer};
    }

}

const config = {
    type: Phaser.AUTO,
    width: 1520,
    height: 880,
    scene: PokerGame,
    parent: 'game-container'
};

const game = new Phaser.Game(config);
