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
``||blocks.丸石||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 16; index++) {
        agent.move(FORWARD, 1)
    }
})

```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 16; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentInspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            agent.turn(RIGHT_TURN)
        }
    }
})

```