### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's have the agent press the switch!!

This time we'll use the ``||repeat ~ times do||`` block to build a staircase! What should we repeat, and how many times?

After pressing ![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'run' to run the program!

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            hiragana_agent.place(FORWARD)
            hiragana_agent.move(FORWARD, 1)
        }
    })
```

```template
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {

        }
    })
```