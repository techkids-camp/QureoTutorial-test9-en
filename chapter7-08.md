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
    for (let index = 0; index < 10; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
        }
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
            agent.move(UP, 1)
            agent.move(FORWARD, 2)
            agent.move(DOWN, 1)
        }
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
            agent.destroy(FORWARD)
        }
    }
})

```