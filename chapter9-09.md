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

``||loop.くりかえしを終わる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
while (true) {

}
```

```ghost
while (true) {
    agent.destroy(FORWARD)
    agent.destroy(DOWN)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, FORWARD) == false) {
        break;
    }
}


```