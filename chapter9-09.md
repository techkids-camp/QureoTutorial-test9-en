### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||loop.もし真ならくりかえし||``

``||agent.エージェントに◯へ置かせる||``

``||agent.エージェントを◯に◯ブロック移動させる||``

``||agent.エージェントにブロックがあるか、◯を確認させる||``

``||logic.もし◯なら||``
``||logic.=||``
``||logic.真||``
``||logic.偽||``

``||loop.くりかえしを終わる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {

    }
})
```

```ghost
while (true) {
    agent.destroy(FORWARD)
    agent.destroy(DOWN)
    agent.move(FORWARD, 1)
    if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}


```