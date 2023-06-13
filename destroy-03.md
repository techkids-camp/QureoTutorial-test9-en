### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをはかしよう!

``||agent.エージェントに前を破壊させる||``ブロックと``||agent.エージェントを前に1ブロック移動させる||``ブロックとくみあわせてエージェントにブロックをこわしてもらおう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    })
```

```template
    player.onChat("run", function () {})
```