# QureoMinecraft

## エージェントにゴミをこわしてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == false) {
            hiragana_agent.destroy(FORWARD)
        }
    }
    while (true) {
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == GRASS) {
            hiragana_agent.destroy(FORWARD)
        }
    }
    hiragana_agent.turn(LEFT_TURN)
})

```