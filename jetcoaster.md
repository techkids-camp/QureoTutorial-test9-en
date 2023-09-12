# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
    for (let index = 0; index < 15; index++) {
        agent.setSlot(4)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(1)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(4)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.move(RIGHT, 3)
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
    agent.move(BACK, 15)
    agent.move(DOWN, 14)
    for (let index = 0; index < 15; index++) {
        agent.setSlot(2)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(3)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(2)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.move(RIGHT, 3)
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
    agent.move(LEFT, 1)
    agent.move(BACK, 15)
    agent.move(DOWN, 15)
    agent.setSlot(4)
    agent.place(DOWN)
    agent.move(UP, 1)
    agent.setSlot(6)
    agent.place(DOWN)
    agent.setSlot(5)
    agent.place(DOWN)

```

```template
    for (let index = 0; index < 15; index++) {
        agent.setSlot(4)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(1)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(4)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.move(RIGHT, 3)
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
    agent.move(BACK, 15)
    agent.move(DOWN, 14)
    for (let index = 0; index < 15; index++) {
        agent.setSlot(2)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(3)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.setSlot(2)
        agent.place(FORWARD)
        agent.move(LEFT, 1)
        agent.move(RIGHT, 3)
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
    agent.move(LEFT, 1)
    agent.move(BACK, 15)
    agent.move(DOWN, 15)
    agent.setSlot(4)
    agent.place(DOWN)
    agent.move(UP, 1)
    agent.setSlot(6)
    agent.place(DOWN)
    agent.setSlot(5)
    agent.place(DOWN)

```