### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

こんかいは``||くりかえし||``ブロックをつかうよ！「ループボタン」をクリックしてくりかえしブロックをだしてみよう！ひだりにいってまえにすすむ...を3かいくりかえせばよさそうだね！ということは...?

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
player.onChat("run", function () {
    for (let index = 0; index < 4; index++) {
    	
    }
    agent.place(FORWARD)
    agent.move(FORWARD, 1)
})
```

```template
player.onChat("run", function () {})

```