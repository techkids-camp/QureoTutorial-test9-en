### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's have the agent destroy blocks!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```ghost
    player.onChat("run", function () {
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {

    })
```