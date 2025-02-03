### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's wiggle the agent!

This time we'll use the ``||agent.agent turn ◯||`` block!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!
```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
    	
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        if (hiragana_agent.detect(AgentDetection.Block, LEFT) == false) {
            hiragana_agent.turn(LEFT_TURN)
        }
        if (hiragana_agent.detect(AgentDetection.Block, RIGHT) == false) {
            hiragana_agent.turn(RIGHT_TURN)
        }
        hiragana_agent.move(FORWARD, 1)
    }
})

```