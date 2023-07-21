### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントの向きを○に変える||``
``||agent.エージェントにどんなブロックか○を確認させる||``
``||logic.もし○○なら||``
``||logic.=||``
``||blocks.金(きん)のブロック||``
``||blocks.ラピスラズリのブロック||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 15; index++) {
        agent.move(FORWARD, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 15; index++) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
            agent.turn(LEFT_TURN)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == GOLD_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
    }
})
```