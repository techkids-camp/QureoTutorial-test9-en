### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## Let's make the agent move!

This time we'll use the following block!

``||agent.agent destroy 〇||``

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
        hiragana_agent.destroy(DOWN)
        hiragana_agent.move(DOWN, 1)
    }
})
player.onChat("run", function () {
    hiragana_agent.teleportToPlayer()
})

```