### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    while (true) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
            break;
        }
    }
})

```

```ghost
while (true) {
    hiragana_agent.move(FORWARD, 1)
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == true) {
        break;
    }
}

```