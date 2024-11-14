# QureoMinecraft

## Let's use the agent to build a structure!

The program is already complete, so you just need to run it!

After that, press the button on the bottom right![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) to start the program!

```ghost
function blank () {
    for (let index = 0; index < 7; index++) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(UP, 1)
    }
}

    hiragana_agent.setSlot(1)
    blank()
    hiragana_agent.move(FORWARD, 2)
    hiragana_agent.setSlot(2)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(3)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    hiragana_agent.setSlot(4)
    hiragana_agent.place(DOWN)
    hiragana_agent.setSlot(5)
    hiragana_agent.move(UP, 1)
    for (let index = 0; index < 3; index++) {
        hiragana_agent.place(DOWN)
        hiragana_agent.move(BACK, 1)
    }

```