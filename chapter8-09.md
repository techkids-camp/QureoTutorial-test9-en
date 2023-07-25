### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントにどんなブロックか、◯を確認させる||``

``||agent.エージェントに◯を破壊させる||``

``||agent.エージェントを◯に◯ブロック移動させる||``

``||blocks.草（くさ）ブロック||``

``||logic.もし◯なら〜でなければ〜||``
``||logic.=||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GRASS) {
            agent.destroy(FORWARD)
            agent.move(RIGHT, 1)
        } else {
            agent.move(RIGHT, 1)
        }
    }
})
```