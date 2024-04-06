# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん2 () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}

    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.move(UP, 1)
        agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            くうらん()
        }
    }
    hiragana_agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        agent.destroy(DOWN)
        hiragana_agent.move(DOWN, 1)
    }
    agent.destroy(DOWN)
    agent.collectAll()
    hiragana_agent.move(UP, 2)
    hiragana_agent.move(BACK, 1)
    agent.setSlot(2)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            くうらん2()
        }
    }
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 4)
    for (let index = 0; index < 5; index++) {
        hiragana_agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        agent.place(FORWARD)
    }
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
    agent.place(DOWN)
    agent.setSlot(3)
    agent.place(FORWARD)
    hiragana_agent.move(UP, 1)
    agent.destroy(RIGHT)
    agent.setSlot(4)
    agent.place(RIGHT)

```

```template
function くうらん2 () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}

    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.move(UP, 1)
        agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            くうらん()
        }
    }
    hiragana_agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        agent.destroy(DOWN)
        hiragana_agent.move(DOWN, 1)
    }
    agent.destroy(DOWN)
    agent.collectAll()
    hiragana_agent.move(UP, 2)
    hiragana_agent.move(BACK, 1)
    agent.setSlot(2)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            くうらん2()
        }
    }
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 4)
    for (let index = 0; index < 5; index++) {
        hiragana_agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        agent.place(FORWARD)
    }
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
    agent.place(DOWN)
    agent.setSlot(3)
    agent.place(FORWARD)
    hiragana_agent.move(UP, 1)
    agent.destroy(RIGHT)
    agent.setSlot(4)
    agent.place(RIGHT)


```