# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
    for (let index = 0; index < 15; index++) {
        agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(1)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 14)
    for (let index = 0; index < 15; index++) {
        agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(3)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(LEFT, 1)
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 15)
    agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(UP, 1)
    agent.setSlot(6)
    hiragana_agent.place(DOWN)
    agent.setSlot(5)
    hiragana_agent.place(DOWN)

```

```template
    for (let index = 0; index < 15; index++) {
        agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(1)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 14)
    for (let index = 0; index < 15; index++) {
        agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(3)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(LEFT, 1)
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 15)
    agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(UP, 1)
    agent.setSlot(6)
    hiragana_agent.place(DOWN)
    agent.setSlot(5)
    hiragana_agent.place(DOWN)

```