### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○を破壊させる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
    }
})
```
```ghost
player.onChat("run", function () {
    if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
        hiragana_agent.destroy(FORWARD)
    }
})
```