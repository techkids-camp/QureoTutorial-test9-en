# QureoMinecraft

## エージェントに3つはしを作ってもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

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
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == false) {
            hiragana_agent.place(DOWN)
        }
    }
    while (true) {
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == GRASS) {
            hiragana_agent.place(DOWN)
        }
        hiragana_agent.turn(LEFT_TURN)
    }
    agent.teleportToPlayer()
})

```