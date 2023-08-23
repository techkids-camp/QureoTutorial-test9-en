### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

こんかいはつぎのブロックをつかうよ！

``||agent.エージェントに◯へ置かせる||``
``||agent.エージェントにを◯に◯ブロック移動させる||``

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        if (agent.detect(AgentDetection.Block, UP) == true) {
            break;
        }
    }
})
```

```ghost
while (true) {
    agent.place(FORWARD)
    agent.move(UP, 1)
    if (agent.detect(AgentDetection.Block, UP) == true) {
        break;
    }
}

```