### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following block!

``||agent.agent inspect block ◯||``

``||agent.agent destroy ◯||``

``||agent.agent move ◯  by ◯||``

``||blocks.Cobblestone||``

``||logic.if 〇 then else||``
``||logic.=||``


After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
        }

    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
                hiragana_agent.move(FORWARD, 1)
            } else {
                hiragana_agent.destroy(DOWN)
                hiragana_agent.move(FORWARD, 1)
            }
        }
        hiragana_agent.move(BACK, 4)
        hiragana_agent.move(RIGHT, 1)
    }
})
```