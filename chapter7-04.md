### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントの向きを○に変える||``ブロックをつかうよ！
みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == PLANKS_OAK) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        agent.move(FORWARD, 1)
        if (agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
            agent.turn(LEFT_TURN)
        }
        if (agent.inspect(AgentInspection.Block, DOWN) == PLANKS_OAK) {
            agent.turn(RIGHT_TURN)
        }
    }
})
```