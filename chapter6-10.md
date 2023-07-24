### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○へ置かせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(UP, 1)
        }
        agent.move(DOWN, 5)
        agent.move(LEFT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(UP, 1)
            if (agent.detect(AgentDetection.Block, FORWARD) == false) {
                agent.place(FORWARD)
            }
        }
        agent.move(DOWN, 5)
        agent.move(LEFT, 1)
    }
})
```