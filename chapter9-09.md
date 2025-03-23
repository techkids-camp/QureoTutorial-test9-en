### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||loop.while 〇 do||``

``||agent.agent place 〇||``

``||agent.agent move 〇  by 〇||``

``||agent.agent detect block 〇||``

``||logic.if 〇 then||``
``||logic.=||``
``||logic.true||``
``||logic.false||``

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
    hiragana_agent.destroy(DOWN)
    hiragana_agent.move(FORWARD, 1)
    if (hiragana_agent.detect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}


```