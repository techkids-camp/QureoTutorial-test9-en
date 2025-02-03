### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's wiggle the agent!

This time we'll use the ``||agent.agent destroy ◯||`` block!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!
```template
player.onChat("run", function () {
    for (let index = 0; index < 6; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == true) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```