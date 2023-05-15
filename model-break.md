### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおしたあと、tキーをおして「run」とチャットににゅうりょくしてプログラムをうごかしてみよう！

```template
player.onChat("run", function () {
    agent.destroy(FORWARD)
    agent.move(UP, 1)
    agent.destroy(FORWARD)
})

```