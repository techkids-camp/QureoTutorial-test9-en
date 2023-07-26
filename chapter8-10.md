### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯を破壊させる||``

``||agent.エージェントを◯に◯ブロック移動させる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
        } else {
        }
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == COBBLESTONE) {
            agent.move(UP, 1)
            agent.move(FORWARD, 2)
            agent.move(DOWN, 1)
        } else {
            agent.destroy(FORWARD)
        }
    }
})
```