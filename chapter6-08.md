### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○へ置かせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == false) {
            agent.place(FORWARD)
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 9; index++) {
        hiragana_agent.move(LEFT, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, DOWN) == false) {
            agent.place(FORWARD)
        }
    }
})
```