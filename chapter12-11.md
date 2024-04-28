# QureoMinecraft

## エージェントにスイッチをおしてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    hiragana_agent.teleport(pos(0, 0, 0))
})

```

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (hiragana_agent.detect(AgentDetection.Block, DOWN) == false) {
           
        }
    }
    while (true) {
        if (hiragana_agent.inspect(AgentInspection.Block, FORWARD) == GRASS) {
        }
        hiragana_agent.turn(LEFT_TURN)
    }
})

```