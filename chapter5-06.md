### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントにブロックをおかせてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        hiragana_agent.move(FORWARD, 1)
        agent.place(FORWARD)
    })
```

```template
    player.onChat("run", function () {

    })
```