### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

``||agent.エージェントに前へ置かせる||``ブロックと``||agent.エージェントを前に1ブロック移動させる||``ブロックとくみあわせてエージェントにブロックをおいてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、**tキーをおしてrunといれて**プログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        agent.place(FORWARD)
        agent.move(FORWARD, 1)
    })
```

```template
    player.onChat("run", function () {})
```