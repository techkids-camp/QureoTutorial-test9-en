### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's have the agent place a block!

Combine the ``||agent.agent place foward||`` block with the ``||agent.agent move forward by 1||`` block to have the agent place the block!

After pressing ![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```ghost
    player.onChat("run", function () {
        hiragana_agent.place(FORWARD)
        hiragana_agent.move(FORWARD, 1)
    })
```

```template
    player.onChat("run", function () {})
```