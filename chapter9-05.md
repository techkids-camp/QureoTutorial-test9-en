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
    if (agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
        break;
    }
}

```

```ghost
while (true) {
    agent.destroy(UP)
    agent.move(UP, 1)
    if (agent.inspect(AgentInspection.Block, FORWARD) == PLANKS_OAK) {
        break;
    }
}

```