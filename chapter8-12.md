### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントにどんなブロックか、◯を確認させる||``

``||agent.エージェントに◯をはかいさせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||blocks.丸石（まるいし）ブロック||``

``||logic.もし◯なら〜でなければ〜||``
``||logic.=||``


みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
        }

    }
})
```
```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 4; index++) {
            if (hiragana_agent.inspect(AgentInspection.Block, DOWN) == COBBLESTONE) {
                hiragana_agent.move(FORWARD, 1)
            } else {
                hiragana_agent.destroy(DOWN)
                hiragana_agent.move(FORWARD, 1)
            }
        }
        hiragana_agent.move(BACK, 4)
        hiragana_agent.move(RIGHT, 1)
    }
})
```