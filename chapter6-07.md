### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○へ置かせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 6; index++) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
            agent.destroy(FORWARD)
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == true) {
            agent.destroy(FORWARD)
        }
    }
})
```