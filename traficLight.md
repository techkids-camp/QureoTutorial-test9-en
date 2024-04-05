# QureoMinecraft

## エージェントをつかって、たてものをつくってもらおう！

プログラムはすでにかんせいしているからうごかすだけだよ！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
function くうらん () {
    for (let index = 0; index < 7; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
}

    agent.setSlot(1)
    くうらん()
    hiragana_agent.move(FORWARD, 2)
    agent.setSlot(2)
    agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    agent.setSlot(4)
    agent.place(DOWN)
    agent.setSlot(5)
    hiragana_agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }
```

```template
function くうらん () {
    for (let index = 0; index < 7; index++) {
        agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
}

    agent.setSlot(1)
    くうらん()
    hiragana_agent.move(FORWARD, 2)
    agent.setSlot(2)
    agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    agent.setSlot(3)
    agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    agent.setSlot(4)
    agent.place(DOWN)
    agent.setSlot(5)
    hiragana_agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }

```