# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
}
function くうらん2 () {
    hiragana_agent.move(DOWN, 5)
    hiragana_agent.move(RIGHT, 1)
    hiragana_agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
}

    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 5; index++) {
        agent.setSlot(1)
        くうらん()
        for (let index = 0; index < 3; index++) {
            agent.place(UP)
            hiragana_agent.move(BACK, 1)
        }
        agent.place(UP)
        hiragana_agent.move(FORWARD, 3)
        hiragana_agent.move(DOWN, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    hiragana_agent.move(BACK, 2)
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.place(FORWARD)
            hiragana_agent.move(DOWN, 1)
        }
        agent.place(FORWARD)
        hiragana_agent.move(UP, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    hiragana_agent.move(DOWN, 3)
    agent.turn(RIGHT_TURN)
    hiragana_agent.move(FORWARD, 2)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(UP)
        hiragana_agent.move(BACK, 1)
    }
    agent.place(UP)
    hiragana_agent.move(FORWARD, 2)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    agent.place(UP)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.turn(RIGHT_TURN)
    hiragana_agent.move(BACK, 1)
    agent.setSlot(4)
    agent.place(FORWARD)
    hiragana_agent.move(UP, 2)
    agent.turn(RIGHT_TURN)
    agent.setSlot(5)
    for (let index = 0; index < 2; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(BACK, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            agent.setSlot(2)
            agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        くうらん2()
        for (let index = 0; index < 5; index++) {
            agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            agent.setSlot(2)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.setSlot(3)
        for (let index = 0; index < 7; index++) {
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.turn(LEFT_TURN)
    agent.setSlot(3)
    for (let index = 0; index < 3; index++) {
        agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            agent.place(DOWN)
            hiragana_agent.move(BACK, 1)
        }
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
    }


```

```template
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
}
function くうらん2 () {
    hiragana_agent.move(DOWN, 5)
    hiragana_agent.move(RIGHT, 1)
    hiragana_agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
}

    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 5; index++) {
        agent.setSlot(1)
        くうらん()
        for (let index = 0; index < 3; index++) {
            agent.place(UP)
            hiragana_agent.move(BACK, 1)
        }
        agent.place(UP)
        hiragana_agent.move(FORWARD, 3)
        hiragana_agent.move(DOWN, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    hiragana_agent.move(BACK, 2)
    agent.setSlot(2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 3; index++) {
            agent.place(FORWARD)
            hiragana_agent.move(DOWN, 1)
        }
        agent.place(FORWARD)
        hiragana_agent.move(UP, 3)
        hiragana_agent.move(LEFT, 1)
    }
    hiragana_agent.move(BACK, 3)
    hiragana_agent.move(DOWN, 3)
    agent.turn(RIGHT_TURN)
    hiragana_agent.move(FORWARD, 2)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(UP)
        hiragana_agent.move(BACK, 1)
    }
    agent.place(UP)
    hiragana_agent.move(FORWARD, 2)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    agent.place(UP)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    hiragana_agent.move(DOWN, 1)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.turn(RIGHT_TURN)
    hiragana_agent.move(BACK, 1)
    agent.setSlot(4)
    agent.place(FORWARD)
    hiragana_agent.move(UP, 2)
    agent.turn(RIGHT_TURN)
    agent.setSlot(5)
    for (let index = 0; index < 2; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(BACK, 1)
    }
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 5; index++) {
            agent.setSlot(2)
            agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        くうらん2()
        for (let index = 0; index < 5; index++) {
            agent.setSlot(3)
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            agent.place(FORWARD)
            hiragana_agent.move(UP, 1)
            agent.setSlot(2)
            agent.place(DOWN)
        }
        agent.turn(LEFT_TURN)
        agent.setSlot(3)
        for (let index = 0; index < 7; index++) {
            agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
            hiragana_agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.turn(LEFT_TURN)
    agent.setSlot(3)
    for (let index = 0; index < 3; index++) {
        agent.setItem(BLOCK_OF_QUARTZ, 64, 3)
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            agent.place(DOWN)
            hiragana_agent.move(BACK, 1)
        }
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 7; index++) {
            hiragana_agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
    }


```