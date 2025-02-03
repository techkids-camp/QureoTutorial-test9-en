### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's wiggle the agent!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
        hiragana_agent.destroy(FORWARD)
    }
})
```