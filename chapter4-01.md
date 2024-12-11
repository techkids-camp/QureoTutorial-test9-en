### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

##  Let's have the agent press the switch!

This time, we will use the ``||loops.repeat ~ times do||`` block! What should we repeat, and how many times?

After pressing ![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 'T' key and type 'run' to run the program!

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
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