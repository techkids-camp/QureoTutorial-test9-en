### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

エージェントをつかってブロックをおいてもらうには、
``||agent.エージェントに前へ置かせる||``ブロックをつかうよ！

ひだりから「エージェントボタン」をクリックしてそのなかにあるブロックをあおいわくにいれちゃおう！

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおして「run」とにゅうりょくしてプログラムをうごかしてみよう！

```ghost
player.onChat("run", function () {
    agent.place(FORWARD)
})
```

```template
player.onChat("run", function () {})

```