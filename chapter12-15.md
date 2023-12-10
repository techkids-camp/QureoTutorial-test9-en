# QureoMinecraft

## エージェントにブロックをおいてもらおう！

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
    for (let index = 0; index < 12; index++) {
        agent.move(FORWARD, 1)
        if (agent.detect(AgentDetection.Block, DOWN) == false) {
           agent.place(DOWN)
        }
    }
    while (true) {
        if (agent.inspect(AgentInspection.Block, FORWARD) == GRASS) {
        }
        agent.turn(LEFT_TURN)
    }
})

```