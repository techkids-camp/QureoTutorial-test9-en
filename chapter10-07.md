### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||loop.while 〇 do||``

``||agent.agent place 〇||``

``||agent.agent move 〇  by 〇||``

``||agent.agent teleport to player||``

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'go' and 'run' to run the program!

```template
player.onChat("go", function () {
    while (true) {

    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        hiragana_agent.move(FORWARD, 1)
        hiragana_agent.place(DOWN)
    }
})
player.onChat("run", function () {
    hiragana_agent.teleportToPlayer()
})

```