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
        if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
            break;
        }
    }
})

```

```ghost
while (true) {
    hiragana_agent.destroy(UP)
    hiragana_agent.move(UP, 1)
    if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```