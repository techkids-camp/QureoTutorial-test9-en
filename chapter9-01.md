### @flyoutOnly true
### @hideIteration true
### @hideIteration true
# QureoMinecraft

## エージェントをうごかしてみよう！

みぎしたの![](https://raw.githubusercontent.com/camp-minecraft/TechkidsCampTutorial/master/images/playbutton.png)をおそう！

```template
player.onChat("run", function () {
    while (true) {
        agent.move(FORWARD, 1)
        if (agent.detect(AgentDetection.Block, FORWARD) == true) {
            break;
        }
    }
})

```

```ghost
while (true) {
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, FORWARD) == true) {
        break;
    }
}

```