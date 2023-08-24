### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯を破壊させる||``

``||agent.エージェントを◯に◯ブロック移動させる||``

``||agent.エージェントにどんなブロックがあるか、◯を確認させる||``

``||logic.もし◯なら||``
``||logic.=||``

``||blocks.樫(かし)の木材||``

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
    agent.move(RIGHT, 1)
    if (agent.inspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```