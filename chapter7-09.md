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
        agent.move(UP, 1)
        if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
        }
        if (agent.inspect(AgentInspection.Block, UP) == DIORITE) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 12; index++) {
        agent.move(UP, 1)
        if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
            agent.move(RIGHT, 1)
            agent.move(UP, 2)
            agent.move(LEFT, 1)
        }
        if (agent.inspect(AgentInspection.Block, UP) == DIORITE) {
            agent.destroy(UP)
        }
    }
})
```