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
while (true) {
    if (agent.detect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}
```

```ghost
while (true) {
    agent.destroy(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}
```