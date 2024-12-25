### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's have the agent to place blocks!

To use the agent to place blocks,
use the ``||agent.agent place forward||`` block!

After pressing ![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```ghost
    player.onChat("run", function () {
        hiragana_agent.place(FORWARD)
    })
```

```template
    player.onChat("run", function () {})
```