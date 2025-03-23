### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||agent.agent place 〇||``

``||agent.agent move 〇  by 〇||``

``||agent.agent detect block 〇||``

``||logic.if 〇 then||``
``||logic.=||``
``||logic.true||``

``||loop.break||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    while (true) {

    }
})
```

```ghost
while (true) {
    hiragana_agent.place(FORWARD)
    hiragana_agent.place(BACK)
    hiragana_agent.place(LEFT)
    hiragana_agent.place(RIGHT)
    hiragana_agent.move(UP, 1)
    if (hiragana_agent.detect(AgentDetection.Block, UP) == true) {
        break;
    }
}

```