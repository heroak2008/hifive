# HI FIVE
## 规则描述
1、一共五副扑克牌，去掉所有的 6、7、8、9，一共还有 190 张，每个人接 46 张，剩余 6 张作为可置换的底牌，抽牌结束后由守擂方庄家抽取并置换。 
2、扑克牌大小顺序为：大王、小王、常主、2、A、K、Q、J、10、5、4、3，其中常主根据对局信息中由 5、10、K中选取，当 5、10、K 中被选为常主后，将从常规大小顺序中剔除，只出现在常主中。 
3、扑克牌中还包括花色大小的区分，其中黑桃、红桃、梅花、方片中，有一门花色会被选为本局中的主花色，任何时候主花色都将大于普通花色，主花色的选定将基于接牌时本局常主的亮定，所有玩家接到常主后均可自主选择是否亮定花色，以第一名亮定的花色为准。 
4、游戏需要 4 人同时参与，4 人分成 2 队对抗，命名为 A1、A2、B1、B2，抽牌及出牌顺序为 A1、A2、B1、B2。 
5、每轮会有一支队伍作为守擂方，另一支队伍作为攻擂方，攻擂方需获取共超过 200 分才可获胜，转换为守擂方。 
6、第一局游戏亮定成功的玩家及其队伍将作为本局队伍的守擂方，亮定成功的玩家为庄家；剩余的两名玩家将作为攻擂方。庄家将在常规接牌接完 46 张牌后，继续抽取剩余 6 张底牌，并可以自主选择 6 张不需要的扑克牌作为底牌扣除，本局游戏过程中任何人不得查看，只有在本局游戏结束后向全体玩家公开，里面若涉及到分数牌，则该分数将由最后一轮获胜的玩家获得，作为最终结算的分数。若本局游戏守擂方获胜，则守擂方继续，常主由 5 升级到 10，庄家转到守擂方另一名玩家；若本局游戏攻擂方获胜，则攻擂方、守擂方身份转换，本局游戏庄家顺序第一名攻擂方玩家作为下一轮的守擂方庄家。 
7、游戏的常主升级规则与攻擂方获得的分数有关：若攻擂方本局游戏没得到 200 分，下局游戏守擂方常主将升 1 级；若攻擂方本局游戏得到 200 分且低于 360 分，下局游戏只转换攻擂方、守擂方的身份，常主不变；若攻擂方本局游戏得到分数超过 360 分，下局游戏攻擂方、守擂方的身份转换，且攻擂方常主升 1 级。常主的等级为：5、10、K、和公主（也就是本局游戏没有常主）。 
8、当本局游戏没有常主时，本局游戏扑克牌的花色也没有大小之分。 
9、当庄家扣除底牌后，将由他的另一名队友进行出牌，他可以选择出牌的花色和张数，只有同花色、同点数的牌可以作为每轮的初始牌打出，可以任意选择 5 张相同的牌、4 张相同的牌、3 张相同的牌、2 张相同的牌或 1 张单独的牌，但必须为同花色、同点数的牌。后面的几名玩家可以自由选择牌打出，但张数必须与本轮第一名玩家打出的张数一致。四名玩家都出完牌后，将根据扑克牌大小、花色大小综合评判本轮的获胜玩家，下一轮该玩家将第一个出牌，若本轮游戏中有玩家打出了分数牌，则该分数将由本轮的获胜玩家获得。 
10、出牌时，除了第一名玩家可以任意选择花色出牌，其余玩家在手中仍有有本轮出牌花色时，必须选择该花色的牌打出，但在出主牌或主花色时可以不完全出同一花色。只要是主牌均可。 
11、当任意队伍在公主的对局中获胜时，可被视作敲钟，即获得游戏的胜利。

### 名词解释
常主：游戏根据守擂方的轮次，按照5、10、K的顺序逐轮进行，其中的5、10、K就是常主。例如游戏最初开始A1/A2为守擂方，那么游戏的首轮常主为A1/A2的5，A1/A2守擂成功后，下一轮的常主为A1/A2的10，否则为B1/B2的5

## Phaser.js Poker Game

### How to Run the Game

1. Clone the repository:
    ```
    git clone https://github.com/heroak2008/hifive.git
    ```
2. Navigate to the `src` directory:
    ```
    cd hifive/src
    ```
3. Open the `index.html` file in your web browser to start the game.

### Directory Structure

- `src/`
  - `index.html`: The main HTML file for the Phaser.js game.
  - `main.js`: The main JavaScript file containing the game logic.

### Initialization Logic

The game starts by randomly assigning 4 players and dealing cards. The deck is prepared by removing all 6, 7, 8, 9 cards, leaving a total of 190 cards. Each player receives 46 cards, and the remaining 6 cards are reserved as bottom cards for the defender to replace.

The first player to use the bottom cards is the defender. The defender and their partner (alternating between A1/B1/A2/B2, with A1/A2 as a pair) will be the defending team for the round. The defender's partner will be the first player to play in the game.
