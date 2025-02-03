### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's try to wiggle the agent!

This time we'll use the``||agent.agent turn ◯||``block!
After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        }
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == BRICKS) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.turn(LEFT_TURN)
        }
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == BRICKS) {
            hiragana_agent.turn(RIGHT_TURN)
        }
    }
})
```