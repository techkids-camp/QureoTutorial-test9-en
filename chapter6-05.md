### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○を破壊させる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, UP) == true) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 10; index++) {
        hiragana_agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, UP) == true) {
            agent.destroy(UP)
        }
    }
})
```