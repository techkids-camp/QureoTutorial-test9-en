### @hideIteration true
# QureoMinecraft

## エージェントをつかって、ブロックをおいてもらおう！

``||agent.エージェントに前へ置かせる||``ブロックと``||agent.エージェントを前に1ブロック移動させる||``ブロックとくみあわせてエージェントにブロックをおいてもらおう！うごいてからブロックをおくからどっちのブロックをうえにするかな？

そのあとみぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたらプログラムがうごくよ！

```ghost
player.onChat("run", function () {
    agent.place(FORWARD)
    agent.move(FORWARD, 1)
})
```

```template
player.onChat("run", function () {})

```