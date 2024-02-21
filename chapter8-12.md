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
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
        }

    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
                agent.move(FORWARD, 1)
            } else {
                agent.destroy(DOWN)
                agent.move(FORWARD, 1)
            }
        }
        agent.move(BACK, 4)
        agent.move(RIGHT, 1)
    }
})
```