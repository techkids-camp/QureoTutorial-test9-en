### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the ``||agent.agent destroy ◯||`` block!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!
```template
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.move(FORWARD, 1)
        }
        hiragana_agent.move(BACK, 4)
        hiragana_agent.move(RIGHT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.move(FORWARD, 1)
            if (hiragana_agent.detect(AgentDetection.Block, DOWN) == true) {
                hiragana_agent.destroy(DOWN)
            }
        }
        hiragana_agent.move(BACK, 4)
        hiragana_agent.move(RIGHT, 1)
    }
})
```