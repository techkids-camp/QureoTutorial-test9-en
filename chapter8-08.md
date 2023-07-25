### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを◯に◯ブロック移動させる||``

``||agent.エージェントに◯を破壊させる||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (agent.inspect(AgentInspection.Block, DOWN) == GRASS) {
        } else {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (agent.inspect(AgentInspection.Block, DOWN) == GRASS) {
            agent.move(FORWARD, 1)
        } else {
            agent.destroy(DOWN)
            agent.move(FORWARD, 1)
        }
    }
})
```