### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯をはかいさせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == false) {
            break;
        }
    }
})
```

```ghost
while (true) {
    hiragana_agent.destroy(FORWARD)
    hiragana_agent.move(FORWARD, 1)
    if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}
```