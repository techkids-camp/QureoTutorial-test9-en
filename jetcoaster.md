# QureoMinecraft

## Let's use the agent to build a structure!

The program is already complete, so all you need to do is run it!

After that, click the play button on the bottom right![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) to execute the program!

```ghost
    for (let index = 0; index < 15; index++) {
        hiragana_agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(1)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 14)
    for (let index = 0; index < 15; index++) {
        hiragana_agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(3)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(LEFT, 1)
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 15)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(UP, 1)
    hiragana_agent.setSlot(6)
    hiragana_agent.place(DOWN)
    hiragana_agent.setSlot(5)
    hiragana_agent.place(DOWN)
    hiragana_agent.placeMineCart()
```

```template
    for (let index = 0; index < 15; index++) {
        hiragana_agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(1)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(4)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 14)
    for (let index = 0; index < 15; index++) {
        hiragana_agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(3)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.setSlot(2)
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(LEFT, 1)
        hiragana_agent.move(RIGHT, 3)
        hiragana_agent.move(UP, 1)
        hiragana_agent.move(FORWARD, 1)
    }
    hiragana_agent.move(LEFT, 1)
    hiragana_agent.move(BACK, 15)
    hiragana_agent.move(DOWN, 15)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(UP, 1)
    hiragana_agent.setSlot(6)
    hiragana_agent.place(DOWN)
    hiragana_agent.placeMineCart()
```