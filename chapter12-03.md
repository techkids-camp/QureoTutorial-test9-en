# QureoMinecraft

## エージェントにどうろをうめてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == false) {
            agent.place(DOWN)
        }
    }
    while (true) {
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == GRASS) {
            agent.place(DOWN)
        }
    }
    agent.turn(LEFT_TURN)
})

```