# QureoMinecraft

## Let's make the agent build 3 tunnels!

After pressing [](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png) at the bottom right, press the 't' key and enter 'go' and 'run' to run the program!

```template
player.onChat("go", function () {

})
player.onChat("run", function () {

})
```

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == false) {
            hiragana_agent.destroy(FORWARD)
        }
    }
    while (true) {
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == GRASS) {
            hiragana_agent.destroy(FORWARD)
        }
        hiragana_agent.turn(LEFT_TURN)
    }
    hiragana_agent.teleportToPlayer()
})

```