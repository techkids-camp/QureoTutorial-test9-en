### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following block!

``||agent.agent destroy ◯||``

``||agent.agent move ◯  by ◯||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
        } else {
        }
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
            hiragana_agent.move(UP, 1)
            hiragana_agent.move(FORWARD, 2)
            hiragana_agent.move(DOWN, 1)
        } else {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```