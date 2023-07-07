### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、スイッチをおさせよう！

こんかいは``||loops.くりかえし||``ブロックをつかってかいだんをつくるよ！なにを4かいくりかえせばいいかな？

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunといれてプログラムをうごかしてみよう！

```ghost
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {
            agent.place(FORWARD)
            agent.move(FORWARD, 1)
        }
    })
```


```template
    player.onChat("run", function () {
        for (let index = 0; index < 4; index++) {

        }
    })
```