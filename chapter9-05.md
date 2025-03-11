### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||agent.agent destroy 〇||``

``||agent.agent move 〇  by 〇||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    while (true) {
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
            break;
        }
    }
})

```

```ghost
while (true) {
    hiragana_agent.destroy(UP)
    hiragana_agent.move(UP, 1)
    if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```