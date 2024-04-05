### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯を破壊させる||``
``||agent.エージェントにを◯に◯ブロック移動させる|``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == true) {
        } else {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 5; index++) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == true) {
            agent.destroy(DOWN)
            hiragana_agent.move(FORWARD, 1)
        } else {
            hiragana_agent.move(FORWARD, 1)
        }
    }
})
```