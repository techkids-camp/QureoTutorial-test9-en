### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

こんかいは``||くりかえし||``ブロックをつかうよ！「ループボタン」をクリックしてくりかえしブロックをだしてみよう！ひだりにいってまえにすすむ...を3かいくりかえせばよさそうだね！ということは...?

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
for (let index = 0; index < 4; index++) {
    
}
agent.place(FORWARD)
agent.move(FORWARD, 1)
```

```template
for (let index = 0; index < 1; index++) {
    agent.place(FORWARD)
    agent.move(FORWARD, 1)
}
```