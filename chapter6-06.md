### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○へ置かせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (agent.detect(AgentDetection.Block, DOWN) == false) {
        }
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 8; index++) {
        agent.move(FORWARD, 1)
        if (agent.detect(AgentDetection.Block, DOWN) == false) {
            agent.place(DOWN)
        }
    }
})
```