### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯におかせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

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
    hiragana_agent.place(FORWARD)
    hiragana_agent.place(BACK)
    hiragana_agent.place(LEFT)
    hiragana_agent.place(RIGHT)
    hiragana_agent.move(UP, 1)
    if (agentInspectDetect.agentDetect(AgentDetection.Block, UP) == true) {
        break;
    }
}

```