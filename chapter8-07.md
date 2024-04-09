### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントにブロックがあるか、◯を確認させる||``

``||agent.エージェントに◯へ置かせる|``

``||logic.もし◯なら〜でなければ〜||``
``||logic.=||``
``||logic.真|``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 7; index++) {
        hiragana_agent.move(RIGHT, 1)
    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 7; index++) {
        hiragana_agent.move(RIGHT, 1)
        if (agentInspectDetect.agentDetect(AgentDetection.Block, FORWARD) == true) {
            hiragana_agent.place(BACK)
        } else {
            hiragana_agent.place(FORWARD)
        }
    }
})
```