### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||agent.agent move 〇  by 〇||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'go' and 'run' to run the program!

```template
player.onChat("go", function () {
    while (true) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        hiragana_agent.place(FORWARD)
        hiragana_agent.turn(LEFT_TURN)
    }
})
player.onChat("run", function () {
    hiragana_agent.move(UP, 1)
})
```