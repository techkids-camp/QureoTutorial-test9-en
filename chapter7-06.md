### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに◯を破壊させる|``ブロックをつかうよ！


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        agent.move(UP, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        agent.move(UP, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            agent.destroy(FORWARD)
        }
    }
})
```