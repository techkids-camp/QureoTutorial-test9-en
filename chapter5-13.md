### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft.

## Let's use the agent to place blocks in the shape of a staircase!

This time we'll use ``||loops.repeat ~ times to do||`` blocks! How do we use them?

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.move(FORWARD, 1)
            hiragana_agent.place(FORWARD)
        }
    })
```


```template
    player.onChat("run", function () {

    })
```