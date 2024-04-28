### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントの向きを○にかえる||``ブロックをつかうよ！
みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        }
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == PLANKS_OAK) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            hiragana_agent.turn(LEFT_TURN)
        }
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == PLANKS_OAK) {
            hiragana_agent.turn(RIGHT_TURN)
        }
    }
})
```