### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおかせてみよう！

こんかいは``||loops.くりかえし||``ブロックをつかうよ！どうつかおう？

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            agent.move(FORWARD, 1)
            agent.place(FORWARD)
        }
    })
```


```template
    player.onChat("run", function () {

    })
```