### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントにブロックがあるか、◯を確認させる||``

``||logic.もし◯なら||``
``||logic.=||``
``||logic.真||``

``||loop.くりかえしを終わる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        hiragana_agent.move(UP, 1)
        hiragana_agent.place(DOWN)
        hiragana_agent.move(FORWARD, 1)
    }
})
```

```ghost
while (true) {
    hiragana_agent.move(UP, 1)
    hiragana_agent.place(DOWN)
    hiragana_agent.move(FORWARD, 1)
    if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
        break;
    }
}

```