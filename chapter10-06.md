### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯をはかいさせる||``

``||agent.エージェントを◯に◯ブロックいどうさせる||``

``||agent.エージェントをじぶんのいちにもどす||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてgoとrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("go", function () {
    while (true) {

    }
})
player.onChat("run", function () {

})
```

```ghost
player.onChat("go", function () {
    while (true) {
        hiragana_agent.destroy(DOWN)
        hiragana_agent.move(DOWN, 1)
    }
})
player.onChat("run", function () {
    hiragana_agent.teleportToPlayer()
})

```