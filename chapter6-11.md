### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいは``||agent.エージェントに○へ置かせる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！
```template
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
    	
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        if (agent.detect(AgentDetection.Block, FORWARD) == false) {
            agent.move(FORWARD, 1)
        }
        if (agent.detect(AgentDetection.Block, LEFT) == false) {
            agent.move(LEFT, 1)
        }
        if (agent.detect(AgentDetection.Block, RIGHT) == false) {
            agent.move(RIGHT, 1)
        }
    }
})
```