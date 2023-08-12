### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん () {
    agent.move(UP, 1)
    agent.setSlot(1)
    agent.place(UP)
    agent.move(DOWN, 1)
    agent.setSlot(2)
    agent.place(UP)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(FORWARD, 1)
}
player.onChat("run", function () {
    agent.destroy(DOWN)
    agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 3; index++) {
            くうらん()
        }
        agent.setSlot(3)
        for (let index = 0; index < 3; index++) {
            agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        agent.turn(RIGHT_TURN)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        agent.place(FORWARD)
        agent.turn(RIGHT_TURN)
    }
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 1)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.setSlot(7)
    agent.place(FORWARD)
    agent.move(RIGHT, 2)
    agent.place(FORWARD)
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(DOWN, 1)
    agent.setSlot(4)
    for (let index = 0; index < 2; index++) {
        agent.destroy(FORWARD)
        agent.place(FORWARD)
        agent.move(UP, 2)
        agent.move(FORWARD, 4)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        agent.move(DOWN, 2)
        agent.destroy(FORWARD)
        agent.place(FORWARD)
        agent.move(LEFT, 3)
    }
    agent.move(UP, 2)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.setSlot(5)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
        agent.setSlot(1)
        agent.place(FORWARD)
    }
    agent.move(UP, 1)
    agent.move(FORWARD, 2)
    agent.destroy(DOWN)
    agent.setSlot(6)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
})


```

```template
function くうらん () {
    agent.move(UP, 1)
    agent.setSlot(1)
    agent.place(UP)
    agent.move(DOWN, 1)
    agent.setSlot(2)
    agent.place(UP)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(FORWARD, 1)
}
player.onChat("run", function () {
    agent.destroy(DOWN)
    agent.move(DOWN, 1)
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index < 3; index++) {
            くうらん()
        }
        agent.setSlot(3)
        for (let index = 0; index < 3; index++) {
            agent.move(BACK, 1)
            agent.place(FORWARD)
        }
        agent.turn(RIGHT_TURN)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        agent.place(FORWARD)
        agent.turn(RIGHT_TURN)
    }
    agent.move(UP, 1)
    agent.place(DOWN)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 1)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.setSlot(7)
    agent.place(FORWARD)
    agent.move(RIGHT, 2)
    agent.place(FORWARD)
    agent.move(RIGHT, 1)
    agent.move(FORWARD, 2)
    agent.turn(LEFT_TURN)
    agent.move(DOWN, 1)
    agent.setSlot(4)
    for (let index = 0; index < 2; index++) {
        agent.destroy(FORWARD)
        agent.place(FORWARD)
        agent.move(UP, 2)
        agent.move(FORWARD, 4)
        agent.turn(RIGHT_TURN)
        agent.turn(RIGHT_TURN)
        agent.move(DOWN, 2)
        agent.destroy(FORWARD)
        agent.place(FORWARD)
        agent.move(LEFT, 3)
    }
    agent.move(UP, 2)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.setSlot(5)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
        agent.setSlot(1)
        agent.place(FORWARD)
    }
    agent.move(UP, 1)
    agent.move(FORWARD, 2)
    agent.destroy(DOWN)
    agent.setSlot(6)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.turn(LEFT_TURN)
        agent.place(FORWARD)
        agent.turn(LEFT_TURN)
        agent.move(BACK, 1)
        agent.place(FORWARD)
    }
})

```