# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん2 () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
}
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
}

    agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
        agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            くうらん()
        }
    }
    agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    agent.destroy(DOWN)
    agent.collectAll()
    agent.move(UP, 2)
    agent.move(BACK, 1)
    agent.setSlot(2)
    for (let index = 0; index < 2; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            くうらん2()
        }
    }
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 4)
    for (let index = 0; index < 5; index++) {
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.place(DOWN)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.destroy(RIGHT)
    agent.setSlot(4)
    agent.place(RIGHT)

```

```template
function くうらん2 () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
}
function くうらん () {
    for (let index = 0; index < 4; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
}

    agent.move(FORWARD, 3)
    for (let index = 0; index < 3; index++) {
        agent.move(UP, 1)
        agent.setSlot(1)
        for (let index = 0; index < 4; index++) {
            くうらん()
        }
    }
    agent.move(FORWARD, 1)
    for (let index = 0; index < 2; index++) {
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
    }
    agent.destroy(DOWN)
    agent.collectAll()
    agent.move(UP, 2)
    agent.move(BACK, 1)
    agent.setSlot(2)
    for (let index = 0; index < 2; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            くうらん2()
        }
    }
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 4)
    for (let index = 0; index < 5; index++) {
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.place(DOWN)
    agent.setSlot(3)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.destroy(RIGHT)
    agent.setSlot(4)
    agent.place(RIGHT)


```