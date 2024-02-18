### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯へ置かせる||``

``||agent.エージェントを◯に◯ブロック移動させる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, UP) == true) {
            break;
        }
    }
})
```

```ghost
while (true) {
    agent.place(FORWARD)
    agent.place(BACK)
    agent.place(LEFT)
    agent.place(RIGHT)
    agent.move(UP, 1)
    if (agentInspectDetect.agentDetect(AgentDetection.Block, UP) == true) {
        break;
    }
}

```