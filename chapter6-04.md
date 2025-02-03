### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's let the agent wiggle around!

This time we'll use the ``||agent.agent place ◯||`` block!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
    }
})
```

```ghost
player.onChat("run", function () {
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
        hiragana_agent.place(FORWARD)
    }
})
```