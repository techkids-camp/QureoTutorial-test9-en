### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following block!

``||agent.agent detect block forward||``

``||agent.agent place ◯||``

``||agent.agent destroy 〇||``

``||logic.if 〇 then else||``
``||logic.=||``
``||logic.true||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 6; index++) {
        hiragana_agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 6; index++) {
        hiragana_agent.move(LEFT, 1)
        if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
            hiragana_agent.destroy(FORWARD)
        } else {
            hiragana_agent.place(FORWARD)
        }
    }
})
```