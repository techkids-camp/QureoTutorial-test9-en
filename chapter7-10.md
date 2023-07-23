### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯を破壊させる|``
``||agent.エージェントにどんなブロックか○を確認させる||``
``||logic.もし○○なら||``
``||logic.=||``
``||blocks.ラピスラズリのブロック||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 10; index++) {
            agent.move(UP, 1)
        }
        agent.move(DOWN, 10)
        agent.move(RIGHT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 10; index++) {
            agent.move(UP, 1)
            if (agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
                agent.destroy(FORWARD)
            }
        }
        agent.move(DOWN, 10)
        agent.move(RIGHT, 1)
    }
})
```