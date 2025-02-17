### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following block!

``||agent.agent destroy 〇||``
``||agent.agent.move ◯  by◯||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == true) {
        } else {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == true) {
            hiragana_agent.destroy(DOWN)
            hiragana_agent.move(FORWARD, 1)
        } else {
            hiragana_agent.move(FORWARD, 1)
        }
    }
})
```