### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||agent.agent detect block 〇||``

``||logic.if 〇 then||``
``||logic.=||``
``||logic.true||``

``||loop.break||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    while (true) {
        hiragana_agent.move(UP, 1)
        hiragana_agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
})
```

```ghost
while (true) {
    hiragana_agent.move(UP, 1)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
        break;
    }
}

```