### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントにブロックがあるか、◯を確認させる||``

``||agent.エージェントに◯へ置かせる|``

``||agent.エージェントに◯を破壊させる||``

``||logic.もし〇なら〜でなければ〜||``
``||logic.=||``
``||logic.真|``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 6; index++) {
        agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 6; index++) {
        agent.move(LEFT, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
            agent.destroy(FORWARD)
        } else {
            agent.place(FORWARD)
        }
    }
})
```