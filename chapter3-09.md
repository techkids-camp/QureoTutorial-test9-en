### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

### Let's have the agent destroy blocks!

To destroy blocks using the agent,
use the ``||agent.agent destroy forward||`` block!

After pressing ![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 'T' key and type 'run' to execute the program!

```ghost
    player.onChat("run", function () {
        hiragana_agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {})
```