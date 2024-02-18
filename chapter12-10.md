# QureoMinecraft

## エージェントに3つトンネルを作ってもらおう！

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
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == false) {
            agent.destroy(FORWARD)
        }
    }
    while (true) {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GRASS) {
            agent.destroy(FORWARD)
        }
        agent.turn(LEFT_TURN)
    }
    agent.teleportToPlayer()
})

```