# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん2 () {
    for (let index = 0; index < 4; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}
function くうらん () {
    for (let index = 0; index < 4; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}

    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.move(UP, 1)
        hiragana_agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            くうらん()
        }
    }
    hiragana_agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.destroy(DOWN)
        hiragana_agent.move(DOWN, 1)
    }
    hiragana_agent.destroy(DOWN)
    agent.collectAll()
    hiragana_agent.move(UP, 2)
    hiragana_agent.move(BACK, 1)
    hiragana_agent.setSlot(2)
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
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        hiragana_agent.place(FORWARD)
    }
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
    hiragana_agent.place(DOWN)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(UP, 1)
    hiragana_agent.destroy(RIGHT)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(RIGHT)

```

```template
function くうらん2 () {
    for (let index = 0; index < 4; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}
function くうらん () {
    for (let index = 0; index < 4; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.turn(LEFT_TURN)
}

    hiragana_agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.move(UP, 1)
        hiragana_agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            くうらん()
        }
    }
    hiragana_agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.destroy(DOWN)
        hiragana_agent.move(DOWN, 1)
    }
    hiragana_agent.destroy(DOWN)
    agent.collectAll()
    hiragana_agent.move(UP, 2)
    hiragana_agent.move(BACK, 1)
    hiragana_agent.setSlot(2)
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
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
        hiragana_agent.move(BACK, 1)
        hiragana_agent.place(FORWARD)
    }
    hiragana_agent.turn(LEFT_TURN)
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
    hiragana_agent.place(DOWN)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(FORWARD)
    hiragana_agent.move(UP, 1)
    hiragana_agent.destroy(RIGHT)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(RIGHT)


```