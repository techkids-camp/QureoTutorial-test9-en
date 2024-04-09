### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを◯に◯ブロック移動させる||``
``||agent.エージェントを◯を破壊させる|``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, UP) == COBBLESTONE) {
        }
        if (agentInspectDetect.agentInspect(AgentInspection.Block, UP) == PLANKS_OAK) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        hiragana_agent.move(UP, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, UP) == COBBLESTONE) {
            hiragana_agent.move(RIGHT, 1)
            hiragana_agent.move(UP, 2)
            hiragana_agent.move(LEFT, 1)
        }
        if (agentInspectDetect.agentInspect(AgentInspection.Block, UP) == PLANKS_OAK) {
            hiragana_agent.destroy(UP)
        }
    }
})
```