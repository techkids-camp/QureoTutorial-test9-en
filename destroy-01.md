### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをはかいしよう！

エージェントをつかってブロックをはかいするには、
``||agent.エージェントに前を破壊させる||``ブロックをつかうよ！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、**tキーをおしてrunといれて**プログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {})
```