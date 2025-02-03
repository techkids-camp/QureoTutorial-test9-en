### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following blocks!

``||agent.move ◯ by ◯||``
``||agent.agent destroy 〇||``


After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == COBBLESTONE) {
        }
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == BRICKS) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == COBBLESTONE) {
            hiragana_agent.move(RIGHT, 1)
            hiragana_agent.move(UP, 2)
            hiragana_agent.move(LEFT, 1)
        }
        if (hiragana_agent.inspect(AgentInspection.Block, UP) == BRICKS) {
            hiragana_agent.destroy(UP)
        }
    }
})
```