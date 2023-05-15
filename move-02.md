### @hideIteration true
# QureoMinecraft

## エージェントをなんほかまえにいどうさせよう！

ひだりにある「エージェント」ボタンをおすと``||agent.エージェントを前に1ブロック移動させる||``ブロックがあるからそれをあおいろの「チャットコマンドrunを入力した時」のなかにいれてみよう！

そしたらしろいところをクリックしてすきなすうじをいれたらそのぶんエージェントがまえにすすむよ！

さいごにみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおして「run」とチャットににゅうりょくしてプログラムをうごかしてみよう！

```ghost
player.onChat("run", function () {
    agent.move(FORWARD, 1)
})
```

```template
player.onChat("run", function () {})

```