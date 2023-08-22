### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントを破壊させる||``

すうじをそれぞれどれだけかえればいいかな？

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおしてrunをいれてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, 0, 0)
    ), SOUTH)
})

```

```ghost
player.onChat("run", function () {
    agent.teleport(positions.add(
    agent.getPosition(),
    pos(0, 0, 0)
    ), WEST)
    agent.destroy(FORWARD)
})

```