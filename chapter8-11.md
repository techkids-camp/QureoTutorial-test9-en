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
    for (let index = 0; index < 11; index++) {
        agent.move(RIGHT, 1)
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 11; index++) {
        agent.move(RIGHT, 1)
        if (agent.inspect(AgentInspection.Block, RIGHT) == COBBLESTONE) {
            agent.move(DOWN, 1)
            agent.move(RIGHT, 2)
            agent.move(UP, 1)
        } else {
            agent.destroy(RIGHT)
        }
    }
})
```