### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the ``||agent.agent place 〇||`` block!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!
```template
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            hiragana_agent.move(UP, 1)
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            hiragana_agent.move(UP, 1)
            if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
                hiragana_agent.place(FORWARD)
            }
        }
        hiragana_agent.move(DOWN, 5)
        hiragana_agent.move(LEFT, 1)
    }
})
```