### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯をはかいさせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||agent.エージェントにどんなブロックがあるか、◯を確認させる||``

``||logic.もし◯なら||``
``||logic.=||``

``||blocks.ダイヤモンドブロック||``

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
    hiragana_agent.destroy(FORWARD)
    hiragana_agent.move(RIGHT, 1)
    if (agentInspectDetect.agentInspect(AgentInspection.Block, FORWARD) == DIAMOND_BLOCK) {
        break;
    }
}

```