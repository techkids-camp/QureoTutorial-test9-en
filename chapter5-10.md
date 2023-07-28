### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントにブロックをはかいさせてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
    })
```

```template
    player.onChat("run", function () {

    })
```