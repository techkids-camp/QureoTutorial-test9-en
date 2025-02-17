### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's move the agent!

This time we'll use the following blocks!

``||agent.agent inspect block 〇||``
``||logic.if  〇〇 then||``
``||logic.=||``
``||blocks.Brick Block||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(LEFT, 1)
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == BRICKS) {
            hiragana_agent.destroy(FORWARD)
        }
    }
})
```