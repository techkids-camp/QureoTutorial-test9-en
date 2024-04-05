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
    	
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 20; index++) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, LEFT) == false) {
            agent.turn(LEFT_TURN)
        }
        if (agentInspectDetect.agentDetect(AgentDetection.Block, RIGHT) == false) {
            agent.turn(RIGHT_TURN)
        }
        hiragana_agent.move(FORWARD, 1)
    }
})

```