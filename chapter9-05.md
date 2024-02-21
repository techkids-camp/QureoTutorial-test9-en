### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯を破壊させる||``

``||agent.エージェントを◯に◯ブロック移動させる||``

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
    agent.destroy(UP)
    agent.move(UP, 1)
    if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```