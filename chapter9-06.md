### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||agent.agent destroy 〇||``

``||agent.agent move 〇  by 〇||``

``||agent.agent inspect block 〇||``

``||logic.if 〇 then||``
``||logic.=||``

``||blocks.diamond block||``

``||loop.break||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```template
player.onChat("run", function () {
    while (true) {

    }
})

```

```ghost
while (true) {
    hiragana_agent.destroy(FORWARD)
    hiragana_agent.move(RIGHT, 1)
    if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```