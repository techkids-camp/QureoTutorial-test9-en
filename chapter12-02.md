# QureoMinecraft

## エージェントにゴミをこわしてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == false) {
            agent.destroy(FORWARD)
        }
    }
    while (true) {
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == GRASS) {
            agent.destroy(FORWARD)
        }
    }
    agent.turn(LEFT_TURN)
})

```