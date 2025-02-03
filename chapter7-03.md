### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following blocks!

``||agent.agent turn ◯||``
``||agent.agent inspect block ◯||``
``||logic.if  ◯◯ then||``
``||logic.=||``
``||blocks.Cobblestone||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 16; index++) {
        hiragana_agent.move(FORWARD, 1)
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 16; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.turn(RIGHT_TURN)
        }
    }
})

```