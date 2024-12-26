### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

### Let's have the agent destroy blocks!

To destroy blocks using the agent,
use the ``||agent.agent destroy forward||`` block!

After pressing ![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```ghost
    player.onChat("run", function () {
        hiragana_agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {})
```